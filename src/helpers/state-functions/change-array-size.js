import { getValueByElementId } from "../functions/get-value-by-element-id";
import generateMatrix from "../2d-array-functions/generate-matrix";
import {dispatchedChangedMatrixSize} from "../../redux/dispatchs/grid-dispatchs";
import shallowCopy from "../2d-array-functions/shallow-copy";
import store from "../../redux/stores/store";
import { dispatchedRemovedAdditionalDestination, dispatchedRemovedWeight, dispatchedRemovedWall, dispatchedMovedEnd, dispatchedMovedStart } from "../../redux/dispatchs/node-dispatchs";
import { clearPath, clearAll } from "./clear-matrix";

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
  
    





    clearPath();
    clearAll();
    dispatchedMovedEnd()
    dispatchedChangedMatrixSize(shallow_copy);
}
