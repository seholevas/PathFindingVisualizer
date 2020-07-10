import shallowCopy from "../2d-array-functions/shallow-copy";
import { dispatchedChangedNodeType } from "../../redux/dispatchs/grid-dispatchs";
import store from "../../redux/stores/store";
import { dispatchedRemovedAdditionalDestination, dispatchedRemovedWeight, dispatchedRemovedWall, dispatchedMovedStart, dispatchedMovedEnd } from "../../redux/dispatchs/node-dispatchs";

export async function clearPath() {
    const start = await store.getState().nodes.start_coordinates;
    const end = await store.getState().nodes.end_coordinates;
    let grid = await store.getState().grid;
    let copy = shallowCopy(grid);

    for (let i = 0; i < copy.length; i++) {
        for (let j = 0; j < copy.length; j++) {
            let node = copy[i][j]
            node["visited"] = false;
            node["shortest_path"] = false;
            copy[i][j] = node;

        }
    }
    await dispatchedChangedNodeType(copy);
    await dispatchedMovedStart([...start]);
    await dispatchedMovedEnd([...end])
}

export async function clearAll()
{
    await clearPath();
    let grid = store.getState().grid;
    let copy = shallowCopy(grid);
    for (let i = 0; i < copy.length; i++) {
        for (let j = 0; j < copy.length; j++) {
            let node = copy[i][j]
            var type = null;
            if(node['type'] !== "start_node" && node["type"] !== "end_node")
            {
               type = node['type']
               node = { type: "empty_node", visited: false, shortest_path: false} 
               copy[i][j] = node;
            }

            switch(type)
            {
                case "additional_destination_node":
                    await dispatchedRemovedAdditionalDestination([i,j]);
                    break;
                case "weight_node":
                    await dispatchedRemovedWeight([i,j]);
                    break;
                case "wall_node":
                    await dispatchedRemovedWall([i,j]);
                    break;
                default:
                    break;
            }

        }
        
    }

    await dispatchedChangedNodeType(copy);
}