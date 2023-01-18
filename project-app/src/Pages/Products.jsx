  import React from 'react'
import FilterProduct from '../Components/FilterProduct'
import ProductList from '../Components/ProductList'


  const Products = () => {
    return (
      <div>
        <h1>Products Page</h1>
        <div>
            <div>
                <FilterProduct />
            </div>
            <div>
                <ProductList />
            </div>
        </div>
      </div>
    )
  }
  
  export default Products
  