import * as buttonActions from "../actions/types/button-types"
import * as gridActions from "../actions/types/grid-types"
import * as sliderActions from "../actions/types/slider-types"
import generateMatrix from "../../helpers/2d-array-functions/generate-matrix";

let INITIAL_STATE = generateMatrix(10);
INITIAL_STATE[5][5] =  { type: "start_node", visited: false, shortest_path: false}
INITIAL_STATE[9][9] = { type: "end_node", visited: false, shortest_path: false}

export default function reducer(state = INITIAL_STATE, action) {
    if (action.type === gridActions.CHANGED_NODE_TYPE) 
    {
        return  action.payload.grid;
    }
    if(action.type === sliderActions.CHANGED_MATRIX_SIZE)
    {
        return action.payload.grid;
    }

    if(action.type === buttonActions.PRESSED_CLEAR)
    {
        return action.payload.grid;
    }
    return state
}