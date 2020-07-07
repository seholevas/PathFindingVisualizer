import { getValueByElementId } from "../functions/get-value-by-element-id";
import generateMatrix from "../2d-array-functions/generate-matrix";
import {dispatchedChangedMatrixSize} from "../../redux/dispatchs/grid-dispatchs";
import shallowCopy from "../2d-array-functions/shallow-copy";
import store from "../../redux/stores/store";
import { dispatchedRemovedAdditionalDestination, dispatchedRemovedWeight, dispatchedRemovedWall, dispatchedMovedEnd, dispatchedMovedStart } from "../../redux/dispatchs/node-dispatchs";

export function changeArraySize()
{
    const size_of_matrix = getValueByElementId("size");
    const matrix = generateMatrix(size_of_matrix);
    const shallow_copy = shallowCopy(matrix);
    const start = store.getState().nodes.start_coordinates;
    const end = store.getState().nodes.end_coordinates;
    const grid_size = store.getState().grid.length;


    if ((start[0] < size_of_matrix-1) && (start[1] < size_of_matrix-1)) {
        shallow_copy[start[0]][start[1]] = { type: "start_node", visited: false, shortest_path: false };
    }
    else {
        dispatchedMovedStart([size_of_matrix-3, size_of_matrix-3])
        shallow_copy[size_of_matrix-3][size_of_matrix-3] = { type: "start_node", visited: false, shortest_path: false };
    }
    if (end[0] < size_of_matrix-1 && end[1] < size_of_matrix-1) {
        shallow_copy[end[0]][end[1]] = { type: "end_node", visited: false, shortest_path: false };
    }
    else {
        dispatchedMovedEnd([size_of_matrix-1, size_of_matrix-1])
        shallow_copy[size_of_matrix-1][size_of_matrix-1] = { type: "end_node", visited: false, shortest_path: false };
        
    }
    if (true) {
        const weights = store.getState().nodes.weight_coordinates;
        const additional_locations = store.getState().nodes.additional_destination_coordinates;
        const walls = store.getState().nodes.wall_coordinates;
        
        for (let i = 0; i < additional_locations.length; i++) {
            let current = additional_locations[i]
            if (current[0] < size_of_matrix-1 && current[1] < size_of_matrix-1) {
                shallow_copy[current[0]][current[1]] = { type: "additional_destination_node", visited: false, shortest_path: false };
            }
            else{
                dispatchedRemovedAdditionalDestination(current);
            }
        }
        
        for (let i = 0; i < weights.length; i++) {
            let current = weights[i]
            if (current[0] < size_of_matrix-1 && current[1] < size_of_matrix-1) {
                shallow_copy[current[0]][current[1]] = { type: "weight_node", visited: false, shortest_path: false };
            }
            else{
                dispatchedRemovedWeight(current);
            }
        }



        for (let i = 0; i < walls.length; i++) {
            let current = walls[i]
            if (current[0] < grid_size && current[1] < size_of_matrix-1) {
                shallow_copy[current[0]][current[1]] = { type: "wall_node", visited: false, shortest_path: false };
            }
            else
            {
                dispatchedRemovedWall(current)
            }
        }


    }






    dispatchedChangedMatrixSize(shallow_copy);
}