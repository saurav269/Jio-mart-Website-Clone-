import { useSelector } from "react-redux"
  import { Navigate, useLocation } from "react-router-dom"
  
  export const PrivateRoute=({children})=>{

    const isAuth = JSON.parse(localStorage.getItem("currentUser"))
    const location = useLocation()
    // console.log(location)
    console.log(isAuth.isAuth)

    if(!isAuth.isAuth){
        return <Navigate to={"/login"} state={location.pathname} replace />
    }
        return children
  }