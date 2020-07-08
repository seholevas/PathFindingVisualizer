import * as nodeActions from "../actions/types/node-types";

const INITIAL_STATE = {
    start_coordinates: [5, 5],
    end_coordinates: [9, 9],
    additional_destination_coordinates: {},
    wall_coordinates: {},
    weight_coordinates: {},

}

// additional destination: {
//  "0-3": [0,3],
//  "2-2": [2,2]
// } 

export default function reducer(state = INITIAL_STATE, action) {

    if (action.type === nodeActions.MOVED_START) {
        return { ...state, start_coordinates: action.payload.coordinates }
    }
    if (action.type === nodeActions.MOVED_END) {
        return { ...state, end_coordinates: action.payload.coordinates };
    }

    if (action.type === nodeActions.ADDED_WALL) {
        // console.log("wall_coordinates: ", action.payload.added_wall_coordinates, "state ",...state.wall_coordinates].push(action.payload.added_wall_coordinates))
        return { ...state, 
            wall_coordinates: {...state.wall_coordinates, [action.payload.key]: action.payload.coordinates}
        }
    }

    if (action.type === nodeActions.REMOVED_WALL) {
        delete state.wall_coordinates[action.payload.key];
        return {
            ...state, wall_coordinates: {...state.wall_coordinates}
        }
    }

    if (action.type === nodeActions.ADDED_WEIGHT) {
        return { ...state, 
            weight_coordinates: {...state.weight_coordinates, [action.payload.key]: action.payload.coordinates}
        }

    }

    if (action.type === nodeActions.REMOVED_WEIGHT) {
        delete state.weight_coordinates[action.payload.key];
        return {
            ...state, weight_coordinates: {...state.weight_coordinates}
        }
    }


    if (action.type === nodeActions.ADDED_ADDITIONAL_DESTINATION_NODE) {
        return { ...state, 
            additional_destination_coordinates: {...state.additional_destination_coordinates, [action.payload.key]: action.payload.coordinates}
        }

    }

    if (action.type === nodeActions.REMOVED_ADDITIONAL_DESTINATION_NODE) {
        delete state.additional_destination_coordinates[action.payload.key];
        return {
            ...state, additional_destination_coordinates: {...state.additional_destination_coordinates}
        }
    }
    return state
}