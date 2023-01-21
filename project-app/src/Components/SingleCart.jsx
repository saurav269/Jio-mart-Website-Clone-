import React from 'react';
import'./SingleCart.css';


const SingleCart = (props) => {
  return (
    <div className='parent'>
      <div className='child1'>
        <img src="https://www.jiomart.com/images/product/420x420/493664804/xiaomi-redmi-note-12-pro-5g-128-gb-6-gb-ram-frosted-blue-mobile-phone-digital-o493664804-p597454257-0-202301092110.jpeg" alt="lauda" width='60%' height = '60%'/>
      </div>
      <div className='child2'>
          <h3>Xiaomi Redmi Note 12 Pro 5G 128 GB, 6 GB RAM, Frosted Blue, Mobile Phone</h3>
          <h3>₹ 24999.00 M.R.P: ₹ 27999.00</h3>
          <button>Add to Cart</button>
      </div>
    </div>
  )
}

export default SingleCart
