import * as gridActions from "../actions/types/grid-types"

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
        console.log("action payload: ", action.payload)
        return  action.payload.grid;
    }
    return state
}