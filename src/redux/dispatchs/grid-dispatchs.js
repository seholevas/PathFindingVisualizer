import store from "../stores/store"
import * as gridDispatch from "../actions/action-creators/grid-action-creator"

export function dispatchedChangedNodeType(array = [[]])
{
    store.dispatch(gridDispatch.changedNodeType(array));
}

export function dispatchedClearMatrix(array =[[]])
{
    store.dispatch(gridDispatch.pressedClear(array));
}

export function dispatchedChangedMatrixSize(matrix =[[]])
{
    store.dispatch(gridDispatch.changedMatrixSize(matrix));
}