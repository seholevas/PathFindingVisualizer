import store from "../stores/store"
import * as buttonDispatch from "../actions/action-creators/settings-action-creator"

function dispatchedStartedPathFinding()
{
    store.dispatch(buttonDispatch.pressedStart());
}

function dispatchedStoppedPathFinding()
{
    store.dispatch(buttonDispatch.pressedStop());
}