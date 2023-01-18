

import * as types from './actionType'
import axios from 'axios'

export const getDataRequest=()=>{
    return {type : types.GET_PRODUCT_REQUEST}
}

export const getDataSuccess=(payload)=>{

    return {type : types.GET_PRODUCT_SUCCESS, payload}
}

export const getDataFailure=()=>{
    return {type : types.GET_PRODUCT_FAILURE}
}


export const getData=(params={})=>(dispatch)=>{

    dispatch(getDataRequest())
    axios.get(`https://product-new-api.onrender.com/data`,params)
    .then((res) => {
        console.log(res.data)
        dispatch(getDataSuccess(res.data))
    })
    .catch((err) =>{
        dispatch(getDataFailure())
    })
}