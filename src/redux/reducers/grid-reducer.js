import * as gridActions from "../actions/types/grid-types"

const INITIAL_STATE = [
    [{ type: "[0][0]", visited: true }, { type: "[0][1]", visited: true }, { type: "[0][2]", visited: true }],
    [{ type: "[1][0]", visited: true }, { type: "[1][1]", visited: true }, { type: "[1][2]", visited: true }],
    [{ type: "[2][0]", visited: true }, { type: "[2][1]", visited: true }, { type: "[2][2]", visited: true }]
];
// const INITIAL_STATE=[["initial",false,true],["pizza"],["topping"]];
// const INITIAL_STATE=[[{type: "row 1 col 0", visited: true},{type: "pizza", visited: true}],[{type: "topping", visited: true},{},{}]];


export default function reducer(state = INITIAL_STATE, action) {
    if (action.type === gridActions.CHANGED_NODE_TYPE) {
        return { ...state, };
    }
    return state
}