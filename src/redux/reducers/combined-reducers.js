
import {combineReducers} from 'redux'
import gridReducer from './grid-reducer'
import settingsReducer from './settings-reducer'


const combinedReducers = 
combineReducers({
    grid: gridReducer,
    settings: settingsReducer
});
export default combinedReducers
