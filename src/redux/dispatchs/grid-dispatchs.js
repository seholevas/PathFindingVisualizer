import store from "../stores/store"
import * as gridDispatch from "../actions/action-creators/grid-action-creator"

export async function dispatchedChangedNodeType(array = [[]])
{
    await store.dispatch(gridDispatch.changedNodeType(array));
}

export async function dispatchedClearMatrix(array =[[]])
{
    await store.dispatch(gridDispatch.pressedClear(array));
}

export async function dispatchedChangedMatrixSize(matrix =[[]])
{
    await store.dispatch(gridDispatch.changedMatrixSize(matrix));
}