  import React from 'react'
  
  const ProductCard = ({image,name,category,price}) => {

    return (
      <div className='product__all'>
        <div>
          <img src={image} alt='' className='pic__div'/>
        </div>

        <div className=''>
        <div className='product__name'>
        <h4>{name}</h4>
        </div>
        <div className='product__cate'>
        <p>Category :{category}</p>
        </div>
        <div className='product__price'>
        <p>Price : {price}</p>
        </div>  
        </div>
      </div>
    )
  }
  
  export default ProductCard
  