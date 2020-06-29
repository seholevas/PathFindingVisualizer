import * as buttonActions from "../types/button-types";
import * as gridActions from "../types/grid-types";


export function pressedClear(array) {

    return {
        type: buttonActions.PRESSED_CLEAR,
        payload: {
            array: array
        }
    }
}


export function changedNodeType(array) {

    return {
        type: gridActions.CHANGED_NODE_TYPE,
        payload: {
            array: array
        }
    }
}