import store from "../stores/store";
import * as nodeDispatched from "../actions/action-creators/node-action-creator"

export function dispatchedAddedAdditionalDestination(coordinates = []) {
    store.dispatch(nodeDispatched.addedAdditionalDestination(coordinates));
}
export function dispatchedAddedWall(coordinates = []) {
    store.dispatch(nodeDispatched.addedWall(coordinates));
}

export function dispatchAddedWeight(coordinates = []) {
    store.dispatch(nodeDispatched.addedWeight(coordinates));
}


export function dispatchedMovedStart(coordinates = []) {
    store.dispatch(nodeDispatched.movedStart(coordinates))
}

export function dispatchedMovedEnd(coordinates = []) {
    store.dispatch(nodeDispatched.movedStart(coordinates))
}

export function dispatchedRemovedAdditionalDestination(coordinates = []) {
    store.dispatch(nodeDispatched.removedAdditionalDestination(coordinates));
}

export function dispatchedRemovedWall(coordinates = []) {
    store.dispatch(nodeDispatched.removedWall(coordinates));
}

export function dispatchedRemovedWeight(coordinates = []) {
    store.dispatch(nodeDispatched.removedWeight(coordinates));
}


