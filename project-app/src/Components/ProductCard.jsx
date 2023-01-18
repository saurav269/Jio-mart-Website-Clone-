  import React from 'react'
  
  const ProductCard = ({image,name,category,price}) => {

    return (
      <div>
        <img src={image} alt=''/>
        <p>Product Name : {name}</p>
        <p>Category :{category}</p>
        <p>Price : {price}</p> 
      </div>
    )
  }
  
  export default ProductCard
  