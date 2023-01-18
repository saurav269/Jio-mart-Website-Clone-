  import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../Redux/productReducer/action'
  
  const ProductList = () => {

    const dispatch = useDispatch()
    const datas = useSelector((store) => store.ProductReducer.data)

    useEffect(() =>{
        dispatch(getData())
    },[]);


    return (
      <div>

        
      </div>
    )
  }
  
  export default ProductList
  