import shallowCopy from "../2d-array-functions/shallow-copy";
import { dispatchedChangedNodeType } from "../../redux/dispatchs/grid-dispatchs";
import store from "../../redux/stores/store";
import { dispatchedRemovedAdditionalDestination, dispatchedRemovedWeight, dispatchedRemovedWall, dispatchedMovedStart, dispatchedMovedEnd } from "../../redux/dispatchs/node-dispatchs";

// export function clearMatrix(isClearAll = true) 
// {
//     // const size_of_matrix = getValueByElementId("size");
//     const grid_size = store.getState().grid.length;
//     const matrix = generateMatrix(grid_size);
//     const shallow_copy = shallowCopy(matrix);
//     const start = store.getState().nodes.start_coordinates;
//     const end = store.getState().nodes.end_coordinates;


//     if ((start[0] < grid_size - 1) && (start[1] < grid_size - 1)) {
//         shallow_copy[start[0]][start[1]] = { type: "start_node", visited: false, shortest_path: false };
//     }
//     else {
//         dispatchedMovedStart([grid_size - 2, grid_size - 2])
//         shallow_copy[grid_size - 2][grid_size - 2] = { type: "start_node", visited: false, shortest_path: false };
//     }
//     if (end[0] < grid_size - 1 && end[1] < grid_size - 1) {
//         shallow_copy[end[0]][end[1]] = { type: "end_node", visited: false, shortest_path: false };
//     }
//     else {
//         dispatchedMovedEnd([grid_size - 1, grid_size - 1])
//         shallow_copy[grid_size - 1][grid_size - 1] = { type: "end_node", visited: false, shortest_path: false };

//     }

//     if (!isClearAll) {
//         const weights = store.getState().nodes.weight_coordinates;
//         const additional_locations = store.getState().nodes.additional_destination_coordinates;
//         const walls = store.getState().nodes.wall_coordinates;

//         while (Object.keys(additional_locations).length !== 0) {
//             let keys = Object.keys(additional_locations);
//             dispatchedRemovedAdditionalDestination(keys[0]);
//         }
//         // for (let i = 0; i < additional_locations.length; i++) {
//         //     let current = additional_locations[i]
//         //     if (current[0] < grid_size && current[1] < grid_size) {
//         //         shallow_copy[current[0]][current[1]] = { type: "additional_destination_node", visited: false, shortest_path: false };
//         //     }
//         //     else
//         //     {
//         //         dispatchedRemovedAdditionalDestination(current);    
//         //     }


//     for (let i = 0; i < weights.length; i++) {
//         let current = weights[i]
//         if (current[0] < grid_size && current[1] < grid_size) {
//             shallow_copy[current[0]][current[1]] = { type: "weight_node", visited: false, shortest_path: false };
//         }
//         else {
//             dispatchedRemovedWeight(current);
//         }
//     }



//     for (let i = 0; i < walls.length; i++) {
//         let current = walls[i]
//         if (current[0] < grid_size && current[1] < grid_size) {
//             shallow_copy[current[0]][current[1]] = { type: "wall_node", visited: false, shortest_path: false };
//         }
//         else {
//             dispatchedRemovedWall(current);
//         }
//     }


// }

// dispatchedMovedStart()
// dispatchedClearMatrix(shallow_copy);
// dispatchedChangedNodeType(matrix)
// }

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
    dispatchedChangedNodeType(copy);
    dispatchedMovedStart([...start]);
    dispatchedMovedEnd([...end])
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
                    dispatchedRemovedAdditionalDestination([i,j]);
                    break;
                case "weight_node":
                    dispatchedRemovedWeight([i,j]);
                    break;
                case "wall_node":
                    dispatchedRemovedWall([i,j]);
                    break;
                default:
                    break;
            }

        }
        
    }

    dispatchedChangedNodeType(copy);
}