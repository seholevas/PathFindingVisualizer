import * as buttonActions from "../types/button-types";
import * as sliderActions from "../types/slider-types";
import * as gridActions from "../types/grid-types";


export function pressedClear(array =[[]]) {

    return {
        type: buttonActions.PRESSED_CLEAR,
        payload: {
            grid: array
        }
    }
}


export function changedNodeType(array = [[]]) {

    return {
        type: gridActions.CHANGED_NODE_TYPE,
        payload: {
            grid: array
        }
    }
}


export function changedMatrixSize(array = [[]])
{
    return {
        type: sliderActions.CHANGED_MATRIX_SIZE,
        payload: {
            grid: array
        } 
    }
}