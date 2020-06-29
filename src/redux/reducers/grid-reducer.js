import * as gridActions from "../actions/types/grid-types"

const INITIAL_STATE=[[]];

export default function reducer(state = INITIAL_STATE, action)
{
    if(action.type === gridActions.CHANGED_NODE_TYPE)
    {
        return  {...state,};
    }
    return state
}