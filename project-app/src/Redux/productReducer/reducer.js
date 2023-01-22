
   import * as types from './actionType'

   const initialState={
       data : [],
       isLoading : false,
       isError : false,
   }

   export const reducer=(oldState = initialState, action)=>{

    const {type,payload} = action;

    switch(type){
        
        case types.GET_PRODUCT_REQUEST :
            return {...oldState,isLoading : true, isError : false}
        case types.GET_PRODUCT_SUCCESS :
            return {...oldState, isLoading : false, isError : false, data: payload}
         case types.GET_PRODUCT_FAILURE :
            return {...oldState, isLoading : false, isError : true}   
        default :
        return oldState
    }

   }