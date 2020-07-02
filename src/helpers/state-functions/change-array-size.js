import { getValueByElementId } from "../functions/get-value-by-element-id";
import generateMatrix from "../2d-array-functions/generate-matrix";
import { dispatchedChangedNodeType } from "../../redux/dispatchs/grid-dispatchs";

export function changeArraySize()
{
    const size_of_matrix = getValueByElementId("size");
    // console.log("size: ", size_of_matrix)
    const matrix = generateMatrix(size_of_matrix);
    // console.log("matrix: ", matrix)
    dispatchedChangedNodeType(matrix);

}