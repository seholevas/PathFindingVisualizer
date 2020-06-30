import * as gridActions from "../actions/types/grid-types"

const empty_STATE = [
    [{ type: "empty_node", visited: false }, { type: "empty_node", visited: false }, { type: "empty_node", visited: true },{ type: "empty_node", visited: true }],
    [{ type: "start_node", visited: false }, { type: "empty_node", visited: false }, { type: "empty_node", visited: true },{ type: "empty_node", visited: true }],
    [{ type: "empty_node", visited: false }, { type: "end_node", visited: false }, { type: "empty_node", visited: true },{ type: "empty_node", visited: true },],
    [{ type: "empty_node", visited: false }, { type: "empty_node", visited: false }, { type: "empty_node", visited: true },{ type: "empty_node", visited: true }],
    // [{ type: "empty_node", visited: false }, { type: "empty_node", visited: false }, { type: "empty_node", visited: true }],
    // [{ type: "empty_node", visited: false }, { type: "empty_node", visited: false }, { type: "empty_node", visited: true }],
    // [{ type: "empty_node", visited: false }, { type: "empty_node", visited: false }, { type: "empty_node", visited: true }],
    // [{ type: "empty_node", visited: false }, { type: "empty_node", visited: false }, { type: "empty_node", visited: true }]
];
// const empty_STATE=[["empty",false,true],["pizza"],["topping"]];
// const empty_STATE=[[{type: "row 1 col 0", visited: true},{type: "pizza", visited: true}],[{type: "topping", visited: true},{},{}]];


export default function reducer(state = empty_STATE, action) {
    if (action.type === gridActions.CHANGED_NODE_TYPE) {
        return { ...state, };
    }
    return state
}