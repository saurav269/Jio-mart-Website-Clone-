import React from 'react';
import'./SingleCart.css';

const dummy = {
   image : "https://www.jiomart.com/images/product/420x420/493664804/xiaomi-redmi-note-12-pro-5g-128-gb-6-gb-ram-frosted-blue-mobile-phone-digital-o493664804-p597454257-0-202301092110.jpeg",
   description : 'Xiaomi Redmi Note 12 Pro 5G 128 GB, 6 GB RAM, Frosted Blue, Mobile Phone',
   price : '₹ 24999.00 M.R.P: ₹ 27999.00'
}

const SingleCart = () => {
  let cart = JSON.parse(localStorage.getItem("CartData")) || []
  const addToCart = () => {
    cart.push(dummy);
    localStorage.setItem('CartData', JSON.stringify(cart));
    // cart.find((el) => el.id === data.id && setQuantity(el.qty))
}

  
  return (
    <div className='parent'>
      <div className='child1'>
        <img src={dummy.image} alt="image" width='60%' height = '60%'/>
      </div>
      <div className='child2'>
          <h3>{dummy.description}</h3>
          <h3>{dummy.price}</h3>
          <p>Rating : </p>
          <div>
          <button onClick={addToCart}>Add to Cart</button>
          
          <button >Buy Now</button>
          </div>
      </div>
    </div>
  )
}

export default SingleCart
