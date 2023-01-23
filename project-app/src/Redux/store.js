import {applyMiddleware, combineReducers, legacy_createStore} from 'redux'

import {reducer as ProductReducer} from './productReducer/reducer'
import {reducer as AuthReducer} from './AuthReducer/reducer'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({AuthReducer,ProductReducer})

const store = legacy_createStore(rootReducer,applyMiddleware(thunk))

export {store}