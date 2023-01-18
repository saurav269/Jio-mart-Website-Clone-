  import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../Redux/productReducer/action'
import ProductCard from './ProductCard'
import './products.css'
  
  const ProductList = () => {

    const dispatch = useDispatch()
    const datas = useSelector((store) => store.ProductReducer.data)

    useEffect(() =>{
        dispatch(getData())
    },[]);


    return (
      <div>
          <div className='product__div'>
        {datas.length > 0 && datas.map((ele,index) =>(
               <div key={ele.id} >
                 <ProductCard {...ele} />
               </div>
            
        ))}
        </div>
        
      </div>
    )
  }
  
  export default ProductList
  