  import React from 'react'
  import{StarIcon} from '@chakra-ui/icons'
import { useState } from 'react'
import CartButton from './CartButton'

  const ProductCard = ({image,name,category,price,rating}) => {

    const [count, setCount] = useState(0)
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
            <p>Price : ₹{price}.00</p>
        </div> 
        <div className='product__price'>
        Rating :<span className='starbtn'>{rating}
        <StarIcon className='star'/></span>
        </div> 
      </div>
                <div >
                {count=== 0  || count > 1 ? (<div data-cy="add_to_cart">
            <button className="btn" onClick={() =>setCount(count+1)}>Add to Cart +</button>
            </div>) : (<CartButton />)}
                 </div>
      </div>
    )
  }
  
  export default ProductCard
  