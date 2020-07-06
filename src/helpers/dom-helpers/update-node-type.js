import store from "../../redux/stores/store";
import { dispatchedChangedNodeType } from "../../redux/dispatchs/grid-dispatchs";
import shallowCopy from "../2d-array-functions/shallow-copy";
import { getValueByElementId } from "../functions/get-value-by-element-id";
import * as nodeDispatch from "../../redux/dispatchs/node-dispatchs";

export default function updateNodeType(id = "") {
    let node_type = getValueByElementId("node-types");
    let coordinates = id.split("-");
    let grid = store.getState().grid;
    let node = grid[coordinates[0]][coordinates[1]]
    coordinates = [parseInt(coordinates[0]), parseInt(coordinates[1])]

    if (node["type"] === node_type) {
        node["type"] = "empty_node";
        switch (node_type) {
            case "wall_node":
                nodeDispatch.dispatchedRemovedWall([coordinates[0], coordinates[1]]);
                break;

            default:
                break;
        }
    }
    else if (node["type"] !== "start_node" && node["type"] !== "end_node") {
        switch(node["type"])
        {
            case "wall_node":
                nodeDispatch.dispatchedRemovedWall(coordinates);
                break;
            case "additional_destination_node":
                nodeDispatch.dispatchedRemovedAdditionalDestination(coordinates);
                break;
            case "weight_node":
                nodeDispatch.dispatchedRemovedWeight(coordinates);
                break;
            default:
                break;
        }
        switch (node_type) {
            case "additional_destination_node":
                nodeDispatch.dispatchedAddedAdditionalDestination(coordinates);
                break;
            case "wall_node":
                nodeDispatch.dispatchedAddedWall([coordinates[0], coordinates[1]]);
                break;
            case "weight_node":
                nodeDispatch.dispatchedRemovedWeight(coordinates);
                break;
            default:
                break;
        }

        node["type"] = node_type;

    }

    grid[coordinates[0]][coordinates[1]] = node;
    const copy = shallowCopy(grid)
    dispatchedChangedNodeType(copy);
}