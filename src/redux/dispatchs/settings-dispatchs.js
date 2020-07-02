import store from "../stores/store"
import * as buttonDispatch from "../actions/action-creators/settings-action-creator"

export function dispatchedStartedSearch()
{
    store.dispatch(buttonDispatch.pressedStart());
}

export function dispatchedStoppedSearch()
{
    store.dispatch(buttonDispatch.pressedStop());
}