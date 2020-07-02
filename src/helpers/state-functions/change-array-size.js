import { getValueByElementId } from "../functions/get-value-by-element-id";
import generateMatrix from "../2d-array-functions/generate-matrix";
import { dispatchedChangedNodeType } from "../../redux/dispatchs/grid-dispatchs";

export function changeArraySize()
{
    const size_of_matrix = getValueByElementId("size");
    const matrix = generateMatrix(size_of_matrix);
    dispatchedChangedNodeType(matrix);
}