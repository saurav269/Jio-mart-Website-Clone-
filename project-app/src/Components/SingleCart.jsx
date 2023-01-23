import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import ProductCard from './ProductCard';
//  import'./SingleCart.css';

// const dummy = {
//    image : "https://www.jiomart.com/images/product/420x420/493664804/xiaomi-redmi-note-12-pro-5g-128-gb-6-gb-ram-frosted-blue-mobile-phone-digital-o493664804-p597454257-0-202301092110.jpeg",
//    description : 'Xiaomi Redmi Note 12 Pro 5G 128 GB, 6 GB RAM, Frosted Blue, Mobile Phone',
//    price : '₹ 24999.00 M.R.P: ₹ 27999.00'
// }

const SingleCart = () => {
  let cart = JSON.parse(localStorage.getItem("CartData")) || []
  //console.log(cart)

  let {id} = useParams()
  const datas = useSelector((store) => store.ProductReducer.data)
  const[pro, setPro] = useState({});

  useEffect(() =>{
    let productData = datas.find((ele) => ele.id === +id)
    productData && setPro(pro)
  },[])

  const addToCart = () => {
    cart.push(datas);
    localStorage.setItem('CartData', JSON.stringify(cart));
    // cart.find((el) => el.id === data.id && setQuantity(el.qty))
    // window.location.href()
   // console.log(cart)
}

  
  return (
    <div className='parent'>
      <div className='child1'>
      
        {/* <img src={dummy.image} alt="image" width='60%' height = '60%'/>
      </div>
      <div className='child2'>
          <h3>{dummy.description}</h3>
          <h3>{dummy.price}</h3>
          <p>Rating : </p>
          <div> */} 
           <div style={{width : "30%", marginTop : "90px" , marginLeft : "38%"}}>
            <ProductCard 
             pro={pro} />
          </div>
          
          <button onClick={addToCart}>.....</button>
          {/* <button >Buy Now</button> */}
          </div>
      </div>

  )
        }

export default SingleCart



// import React from 'react';
// import'./SingleCart.css';

// const dummy = {
//    image : "https://www.jiomart.com/images/product/600x600/590003515/onion-1-kg-product-images-o590003515-p590003515-0-202203170724.jpg",
//    description : 'Onion 1 kg = The beauty of an Onion is that it can go just about anywhere. Cut it into thin slices to top off your favourite burger or hot dog, or chop it into little cubes to bring out the sweetness in curry dishes. Chopped Onions are perfect for fish dishes, quiche, stews and chili. Onions can be roasted whole until tender and then chopped, or caramelized by slowly cooking them in butter for a delicious treat for a delicious treat. They are also delicious when dipped in batter and deep-fried! So, go ahead, buy Onion 1 kg online now!',
//    price : '₹ 24999.00 M.R.P: ₹ 27999.00'
// }

// const SingleCart = () => {
//   let cart = JSON.parse(localStorage.getItem("CartData")) || []
//   const addToCart = () => {
//     cart.push('');
//     localStorage.setItem('CartData', JSON.stringify(cart));
//     // cart.find((el) => el.id === data.id && setQuantity(el.qty))
// }

  
//   return (
//     <div className='parent'>
//       <div className='child1'>
//         <img src= 'https://www.jiomart.com/images/product/600x600/590003515/onion-1-kg-product-images-o590003515-p590003515-0-202203170724.jpg' alt="image" width='60%' height = '60%'/>
//       </div>
//       <div className='child2'>
//           <h2 className = "desc">'Onion 1 kg = The beauty of an Onion is that it can go just about anywhere. Cut it into thin slices to top off your favourite burger or hot dog, or chop it into little cubes to bring out the sweetness in curry dishes. Chopped Onions are perfect for fish dishes, quiche, stews and chili. Onions can be roasted whole until tender and then chopped, or caramelized by slowly cooking them in butter for a delicious treat for a delicious treat. They are also delicious when dipped in batter and deep-fried! So, go ahead, buy Onion 1 kg online now!'</h2>
//           <h3>'₹ 24999.00 M.R.P: ₹ 27999.00'</h3>
//           <p>Rating : 4.3</p>
//           <div>
//           <button onClick={addToCart}>Add to Cart</button>
          
//           <button >Buy Now</button>
//           </div>
//       </div>
//     </div>
//   )
// }

// export default SingleCart;