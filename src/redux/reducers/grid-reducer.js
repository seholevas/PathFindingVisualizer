import * as gridActions from "../actions/types/grid-types"

const empty_STATE = [
    [{ type: "empty_node", visited: false }, { type: "empty_node", visited: false }, { type: "empty_node", visited: false },{ type: "empty_node", visited: false }],
    [{ type: "start_node", visited: false }, { type: "empty_node", visited: false }, { type: "empty_node", visited: false },{ type: "empty_node", visited: false }],
    [{ type: "empty_node", visited: false }, { type: "end_node", visited: false }, { type: "empty_node", visited: false },{ type: "empty_node", visited: false },],
    [{ type: "empty_node", visited: false }, { type: "empty_node", visited: false }, { type: "empty_node", visited: false },{ type: "empty_node", visited: false }],
    // [{ type: "empty_node", visited: false }, { type: "empty_node", visited: false }, { type: "empty_node", visited: false }],
    // [{ type: "empty_node", visited: false }, { type: "empty_node", visited: false }, { type: "empty_node", visited: false }],
    // [{ type: "empty_node", visited: false }, { type: "empty_node", visited: false }, { type: "empty_node", visited: false }],
    // [{ type: "empty_node", visited: false }, { type: "empty_node", visited: false }, { type: "empty_node", visited: false }]
];
// const empty_STATE=[["empty",false,false],["pizza"],["topping"]];
// const empty_STATE=[[{type: "row 1 col 0", visited: false},{type: "pizza", visited: false}],[{type: "topping", visited: false},{},{}]];


export default function reducer(state = empty_STATE, action) {
    if (action.type === gridActions.CHANGED_NODE_TYPE) {
        return { ...state, };
    }
    return state
}