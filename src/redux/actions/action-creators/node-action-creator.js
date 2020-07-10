import * as nodeActions from "../types/node-types"

export function addedWeight(key,coordinates) {
    return {
        type: nodeActions.ADDED_WEIGHT,
        payload: {
            key:key,
            coordinates: coordinates
        }
    }
}

export function removedWeight(key) {
    return {
        type: nodeActions.REMOVED_WEIGHT,
        payload: {
            key: key,
            // coordinates: coordinates
        }
    }
}


export function addedAdditionalDestination(key, coordinates) {
    return {
        type: nodeActions.ADDED_ADDITIONAL_DESTINATION_NODE,
        payload: {
            key: key,
            coordinates: coordinates
        }
    }
}

export function removedAdditionalDestination(key) {
    return {
        type: nodeActions.REMOVED_ADDITIONAL_DESTINATION_NODE,
        payload: {
            key: key,
            // coordinates: coordinates
        }
    }
}



export function movedStart(coordinates) {
    return {
        type: nodeActions.MOVED_START,
        payload: {
            coordinates: coordinates
        }
    }
}

export function movedEnd(coordinates) {
    return {
        type: nodeActions.MOVED_END,
        payload: {
            coordinates: coordinates
        }
    }
}

export function addedWall(key, coordinates) {
    return {
        type: nodeActions.ADDED_WALL,
        payload: {
            key: key,
            coordinates: coordinates
        }
    }
}

export function removedWall(key) {
    return {
        type: nodeActions.REMOVED_WALL,
        payload: {
            key: key,
            // coordinates: coordinates
        }
    }
}