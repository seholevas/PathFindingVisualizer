import store from "../stores/store";
import * as nodeDispatched from "../actions/action-creators/node-action-creator"

export function dispatchedAddedAdditionalDestination(key, coordinates = []) {
    await store.dispatch(nodeDispatched.addedAdditionalDestination(key, coordinates));
}
export function dispatchedAddedWall(key, coordinates = []) {
    await store.dispatch(nodeDispatched.addedWall(key, coordinates));
}

export function dispatchedAddedWeight(key, coordinates = []) {
    await store.dispatch(nodeDispatched.addedWeight(key, coordinates));
}


export function dispatchedMovedStart(coordinates = []) {
    await store.dispatch(nodeDispatched.movedStart(coordinates))
}

export function dispatchedMovedEnd(coordinates = []) {
    await store.dispatch(nodeDispatched.movedEnd(coordinates))
}

export function dispatchedRemovedAdditionalDestination(key) {
    await store.dispatch(nodeDispatched.removedAdditionalDestination(key));
}

export function dispatchedRemovedWall(key) {
    await store.dispatch(nodeDispatched.removedWall(key));
}

export function dispatchedRemovedWeight(key) {
    await store.dispatch(nodeDispatched.removedWeight(key));
}


