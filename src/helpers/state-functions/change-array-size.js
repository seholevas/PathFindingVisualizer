import { getValueByElementId } from "../functions/get-value-by-element-id";
import generateMatrix from "../2d-array-functions/generate-matrix";
import {dispatchedChangedMatrixSize, dispatchedChangedNodeType } from "../../redux/dispatchs/grid-dispatchs";
import shallowCopy from "../2d-array-functions/shallow-copy";

export function changeArraySize()
{
    const size_of_matrix = getValueByElementId("size");
    const matrix = generateMatrix(size_of_matrix);
    const shallow_copy = shallowCopy(matrix);
    dispatchedChangedMatrixSize(shallow_copy);
    // dispatchedChangedNodeType(matrix)
}