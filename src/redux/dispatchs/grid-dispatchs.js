import store from "../stores/store"
import * as gridDispatch from "../actions/action-creators/grid-action-creator"

function dispatchedChangedNodeType(array = [[]])
{
    store.dispatch(gridDispatch.changedNodeType(array));
}

function dispatchedStoppedPathFinding(array =[[]])
{
    store.dispatch(gridDispatch.pressedClear(array));
}