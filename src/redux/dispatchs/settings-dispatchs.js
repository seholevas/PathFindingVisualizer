import store from "../stores/store"
import * as buttonDispatch from "../actions/action-creators/settings-action-creator"

export function dispatchedStartedSearch()
{
    await store.dispatch(buttonDispatch.pressedStart());
}

export function dispatchedStoppedSearch()
{
    await store.dispatch(buttonDispatch.pressedStop());
}