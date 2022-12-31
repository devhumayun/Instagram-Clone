import { combineReducers } from 'redux'
import { authReducer } from './Auth/authReducer'

// create root reducer
export const rootReducer = combineReducers({
    auth : authReducer
})