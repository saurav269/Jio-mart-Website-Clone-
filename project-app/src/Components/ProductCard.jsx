  import React from 'react'
  import{StarIcon} from '@chakra-ui/icons'

  const ProductCard = ({image,name,category,price,rating}) => {

    return (
      <div className='product__all'>
        <div>
          <img src={image} alt='' className='pic__div'/>
        </div>

      <div className='data__all'>
        <div className='product__name'>
        <h4>{name}</h4>
        </div>
        <div className='product__cate'>
        <p>Category :{category}</p>
        </div>
        <div className='product__price'>
            <p>Price : {price}</p>
        </div> 
        <div className='product__price'>
        Rating :<span className='starbtn'>{rating}
        <StarIcon className='star'/></span>
        </div> 
      </div>
                <div>
                  <button>Add Product</button>
                 </div>
      </div>
    )
  }
  
  export default ProductCard
  