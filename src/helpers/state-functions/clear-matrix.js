import { getValueByElementId } from "../functions/get-value-by-element-id";
import generateMatrix from "../2d-array-functions/generate-matrix";
import shallowCopy from "../2d-array-functions/shallow-copy";
import { dispatchedClearMatrix } from "../../redux/dispatchs/grid-dispatchs";

export function clearMatrix()
{
    const size_of_matrix = getValueByElementId("size");
    const matrix = generateMatrix(size_of_matrix);
    const shallow_copy = shallowCopy(matrix);
    dispatchedClearMatrix(shallow_copy);
    // dispatchedChangedNodeType(matrix)
}