import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useSearchParams } from 'react-router-dom'
import { getData } from '../Redux/productReducer/action'
import ProductCard from './ProductCard'
import './products.css'
  
  const ProductList = () => {

    const dispatch = useDispatch()
    const datas = useSelector((store) => store.ProductReducer.data)
    const location = useLocation()
    const [searchParams] = useSearchParams()

    // console.log(location)

    useEffect(() =>{
      let sortBy = searchParams.get("sort");
        let paramsData = {
            params : {
              rating : searchParams.getAll("rating"),
              category : searchParams.getAll("category"),
              _sort : sortBy,
              _order : searchParams.get("order"),
           }
        }
        dispatch(getData(paramsData))
    },[location.search]);


    return (
      <div className='product__main'>
        <div className='product__name'>
          <p className='pro__nam'>All Products</p>
        </div>
        <div className='product__div'>
        {datas.length > 0 && datas.map((ele,index) =>(
               <div key={ele.id} >
                 <ProductCard pro={ele} />
               </div>                 
        ))}
        </div>
        
      </div>
    )
  }
  
  export default ProductList
  