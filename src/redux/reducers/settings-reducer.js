import * as buttonActions from "../actions/types/button-types"

export default function reducer(state = false, action)
{
    if(action.type === buttonActions.PRESSED_START)
    {
        return  action.payload.playing
    }
    else if(action.type === buttonActions.PRESSED_STOP)
    {
        return  action.payload.playing
    }
    return state
}