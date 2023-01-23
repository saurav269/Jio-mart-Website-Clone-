import React from 'react'
import{StarIcon} from '@chakra-ui/icons'
import { useState } from 'react'
import CartButton from './CartButton'
import { Link } from 'react-router-dom'
// {id,image,name,category,price,rating}
const ProductCard = ({pro}) => {

  const [count, setCount] = useState(0)
  return (
    <div className='product__all'>
      <div>
        <Link to={`/products/${pro.id}`}>
        <img src={pro.image} alt='' className='pic__div'/>
        </Link>
      </div>

    <div className='data__all'>
      <div className='product__name'>
      <h4>{pro.name}</h4>
      </div>
      <div className='product__cate'>
      <p className='c__c'>Category :{pro.category}</p>
      </div>
      <div className='product__price'>
          <p className='c__c'>Price : ₹{pro.price}.00</p>
      </div> 
      <div className='product__price'>
      Rating :<span className='starbtn'>{pro.rating}
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
