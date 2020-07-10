import store from "../stores/store"
import * as buttonDispatch from "../actions/action-creators/settings-action-creator"

export async function dispatchedStartedSearch()
{
    await store.dispatch(buttonDispatch.pressedStart());
}

export async function dispatchedStoppedSearch()
{
    await store.dispatch(buttonDispatch.pressedStop());
}