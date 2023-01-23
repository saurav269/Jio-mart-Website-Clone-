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
            <div className='produ__main'>
              <div>
                <img className='pro__img' src='https://www.jiomart.com/images/category/2/groceries-20210201.jpeg' alt=''/>
              </div>
                <ProductList />
            </div>
        </div>
      </div>
    )
  }
  
  export default Products