import store from "../stores/store"
import * as gridDispatch from "../actions/action-creators/grid-action-creator"

export function dispatchedChangedNodeType(array = [[]])
{
    store.dispatch(gridDispatch.changedNodeType(array));
}

export function dispatchedClearPathFinding(array =[[]])
{
    store.dispatch(gridDispatch.pressedClear(array));
}

export function dispatchedChangedMatrixSize(matrix =[[]])
{
    // console.log("in dispatched function")
    store.dispatch(gridDispatch.changedMatrixSize(matrix));
}