import * as types from "./actionTypes";
import axios from "axios";



//-------------------------GET ACTION FUNCTIONS/OBJECTS-----------------------------------------------------
const getUserLoginDataRequest = () => {
    return { 
        type: types.GET_USER_LOGIN_DATA_REQUEST
    }
}

const getUserLoginDataSuccess = (payload) => {
    return { 
        type: types.GET_USER_LOGIN_DATA_SUCCESS,
        payload
    }
}

const getUserLoginDataFailure = () => {
    return { 
        type: types.GET_USER_LOGIN_DATA_FAILURE
    }
}

//--------------------------POST ACTION FUNCTIONS/OBJECTS---------------------------------

const postUserLoginDataRequest = () => {
    return { 
        type: types.POST_USER_LOGIN_DATA_REQUEST
    }
}

const postUserLoginDataSuccess = (payload) => {
    return { 
        type: types.POST_USER_LOGIN_DATA_SUCCESS,
        payload
    }
}

const postUserLoginDataFailure = () => {
    return { 
        type: types.POST_USER_LOGIN_DATA_FAILURE
    }
}

//--------------------------------------------------------------

export const getUserLoginDetails = (mobile) => (dispatch) => {
      dispatch(getUserLoginDataRequest());

      return axios.get(`http://localhost:8080/userDetails?q=${mobile}`).then((res) => { console.log(res.data[0],"from get request in action"); dispatch(getUserLoginDataSuccess(res.data))} ).catch(
        err => dispatch(getUserLoginDataFailure())
      )
}

export const postNewUserLoginDetails = (data) => (dispatch) => {
      dispatch(postUserLoginDataRequest());

      axios.post(`http://localhost:8080/userDetails`,data).then((res) => 
      {dispatch(postUserLoginDataSuccess(res.data)); console.log(res.data,"from action.jsx");}).catch(err => dispatch(postUserLoginDataFailure()) )
}

export const updateUserAuthStatus = (id,isAuth) => {
      axios.patch(`http://localhost:8080/userDetails/${id}`,isAuth)
}