import store from "../stores/store";
import * as nodeDispatched from "../actions/action-creators/node-action-creator"

export function dispatchedAddedAdditionalDestination(key, coordinates = []) {
    store.dispatch(nodeDispatched.addedAdditionalDestination(key, coordinates));
}
export function dispatchedAddedWall(key, coordinates = []) {
    store.dispatch(nodeDispatched.addedWall(key, coordinates));
}

export function dispatchedAddedWeight(key, coordinates = []) {
    store.dispatch(nodeDispatched.addedWeight(key, coordinates));
}


export function dispatchedMovedStart(coordinates = []) {
    store.dispatch(nodeDispatched.movedStart(coordinates))
}

export function dispatchedMovedEnd(coordinates = []) {
    store.dispatch(nodeDispatched.movedEnd(coordinates))
}

export function dispatchedRemovedAdditionalDestination(key) {
    store.dispatch(nodeDispatched.removedAdditionalDestination(key));
}

export function dispatchedRemovedWall(key) {
    store.dispatch(nodeDispatched.removedWall(key));
}

export function dispatchedRemovedWeight(key) {
    store.dispatch(nodeDispatched.removedWeight(key));
}


