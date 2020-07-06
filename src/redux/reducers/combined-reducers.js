
import {combineReducers} from 'redux'
import gridReducer from './grid-reducer'
import nodeReducer from './node-reducer'
import settingsReducer from './settings-reducer'


const combinedReducers = 
combineReducers({
    grid: gridReducer,
    nodes: nodeReducer,
    settings: settingsReducer
});
export default combinedReducers
