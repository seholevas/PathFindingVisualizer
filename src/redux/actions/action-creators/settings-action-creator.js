import * as buttonActions from "../types/button-types";
export function pressedStop() {
    return {
        type: buttonActions.PRESSED_STOP,
        payload: {
            playing: false
        }
    }
}

export function pressedStart() {
    return {
        type: buttonActions.PRESSED_START,
        payload: {
            playing: true
        }
    }
}