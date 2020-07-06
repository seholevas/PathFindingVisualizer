import * as nodeActions from "../types/node-types"

export function addedWeight(coordinates) {
    return {
        type: nodeActions.ADDED_WEIGHT,
        payload: {
            added_weight_coordinates: coordinates
        }
    }
}

export function removedWeight(coordinates)
{
    return {
        type: nodeActions.REMOVED_WEIGHT,
        payload: {
          coordinates: coordinates
        }
    }
}


export function addedAdditionalDestination(coordinates) {
    return {
        type: nodeActions.ADDED_ADDITIONAL_DESTINATION_NODE,
        payload: {
            added_weight_coordinates: coordinates
        }
    }
}

export function removedAdditionalDestination(coordinates)
{
    return {
        type: nodeActions.REMOVED_ADDITIONAL_DESTINATION_NODE,
        payload: {
          coordinates: coordinates
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

export function addedWall(coordinates) {
    return {
        type: nodeActions.ADDED_WALL,
        payload: {
            coordinates: coordinates
        }
    }
}

export function removedWall(coordinates) {
    return {
        type: nodeActions.REMOVED_WALL,
        payload: {
            coordinates: coordinates
        }
    }
}