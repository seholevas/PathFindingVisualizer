import * as nodeActions from "../actions/types/node-types";

const INITIAL_STATE = {
    start_coordinates: [2, 2],
    end_coordinates: [3, 3],
    additional_destination_coordinates: [],
    wall_coordinates: [],
    weight_coordinates: [],

}

export default function reducer(state = INITIAL_STATE, action) {

    if (action.type === nodeActions.MOVED_START) {
        return { ...state, start_coordinates: action.payload.coordinates }
    }
    if (action.type === nodeActions.MOVED_END) {
        return { ...state, end_coordinates: action.payload.coordinates };
    }

    if (action.type === nodeActions.ADDED_WALL) {
        // console.log("wall_coordinates: ", action.payload.added_wall_coordinates, "state ",...state.wall_coordinates].push(action.payload.added_wall_coordinates))
        return { ...state, wall_coordinates: [...state.wall_coordinates, action.payload.coordinates] }
    }

    if (action.type === nodeActions.REMOVED_WALL) {
        return {
            ...state, wall_coordinates: [...state.wall_coordinates.filter(
                (coordinates) =>
                    (coordinates[0] !== action.payload.coordinates[0])
                    && (coordinates[1] !== action.payload.coordinates[1]))]
        }
    }

    if (action.type === nodeActions.ADDED_WEIGHT) {
        return { ...state, weight_coordinates: [...state.weight_coordinates, action.payload.coordinates] }

    }

    if (action.type === nodeActions.REMOVED_WEIGHT) {
        return {
            ...state, weight_coordinates: [...state.weight_coordinates.filter(
                (coordinates) =>
                    (coordinates[0] !== action.payload.coordinates[0])
                    && (coordinates[1] !== action.payload.coordinates[1]))]
        }
    }


    if (action.type === nodeActions.ADDED_ADDITIONAL_DESTINATION_NODE) {
        return { ...state, additional_destination_coordinates: [...state.additional_destination_coordinates, action.payload.coordinates] }

    }

    if (action.type === nodeActions.REMOVED_ADDITIONAL_DESTINATION_NODE) {
        return {
            ...state, additional_destination_coordinates: [...state.additional_destination_coordinates.filter(
                (coordinates) =>
                    (coordinates[0] !== action.payload.coordinates[0])
                    && (coordinates[1] !== action.payload.coordinates[1]))]
        }
    }
    return state
}