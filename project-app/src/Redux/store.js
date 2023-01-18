   import {applyMiddleware, combineReducers, legacy_createStore} from 'redux'

   import {reducer as ProductReducer} from './productReducer/reducer'
   import thunk from 'redux-thunk'
  
   const rootReducer = combineReducers({ProductReducer})

   const store = legacy_createStore(rootReducer,applyMiddleware(thunk))

   export {store}