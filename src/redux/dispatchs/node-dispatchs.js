import store from "../stores/store";
import * as nodeDispatched from "../actions/action-creators/node-action-creator"

export async function dispatchedAddedAdditionalDestination(key, coordinates = []) {
    await store.dispatch(nodeDispatched.addedAdditionalDestination(key, coordinates));
}
export async function dispatchedAddedWall(key, coordinates = []) {
    await store.dispatch(nodeDispatched.addedWall(key, coordinates));
}

export async function dispatchedAddedWeight(key, coordinates = []) {
    await store.dispatch(nodeDispatched.addedWeight(key, coordinates));
}


export async function dispatchedMovedStart(coordinates = []) {
    await store.dispatch(nodeDispatched.movedStart(coordinates))
}

export async function dispatchedMovedEnd(coordinates = []) {
    await store.dispatch(nodeDispatched.movedEnd(coordinates))
}

export async function dispatchedRemovedAdditionalDestination(key) {
    await store.dispatch(nodeDispatched.removedAdditionalDestination(key));
}

export async function dispatchedRemovedWall(key) {
    await store.dispatch(nodeDispatched.removedWall(key));
}

export async function dispatchedRemovedWeight(key) {
    await store.dispatch(nodeDispatched.removedWeight(key));
}


