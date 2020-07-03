import * as gridActions from "../actions/types/grid-types"
import * as sliderActions from "../actions/types/slider-types"


const INITIAL_STATE =
    [
        [{ type: "start_node", visited: false, shortest_path: false }, { type: "empty_node", visited: false, shortest_path: false }, { type: "empty_node", visited: false, shortest_path: false }, { type: "empty_node", visited: false, shortest_path: false }],
        [{ type: "empty_node", visited: false, shortest_path: false }, { type: "empty_node", visited: false, shortest_path: false }, { type: "empty_node", visited: false, shortest_path: false }, { type: "empty_node", visited: false, shortest_path: false }],
        [{ type: "empty_node", visited: false, shortest_path: false }, { type: "empty_node", visited: false, shortest_path: false }, { type: "empty_node", visited: false, shortest_path: false }, { type: "empty_node", visited: false, shortest_path: false },],
        [{ type: "empty_node", visited: false, shortest_path: false }, { type: "empty_node", visited: false, shortest_path: false }, { type: "end_node", visited: false, shortest_path: false }, { type: "empty_node", visited: false, shortest_path: false }]
    ];

export default function reducer(state = INITIAL_STATE, action) {
    if (action.type === gridActions.CHANGED_NODE_TYPE) 
    {
        return  action.payload.grid;
    }
    if(action.type === sliderActions.CHANGED_MATRIX_SIZE)
    {
        return action.payload.grid;
    }
    return state
}