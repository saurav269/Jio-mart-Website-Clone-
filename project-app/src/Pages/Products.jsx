  import React from 'react'
import FilterProduct from '../Components/FilterProduct'
import ProductList from '../Components/ProductList'


  const Products = () => {
    return (
      <div>
        <h1>Products Page</h1>
        <div className='main'>
            <div className='filter__div'>
                <FilterProduct />
            </div>
            <div className='product__main'>
                <ProductList />
            </div>
        </div>
      </div>
    )
  }
  
  export default Products
  