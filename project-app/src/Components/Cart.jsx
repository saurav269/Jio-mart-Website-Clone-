import React from 'react'
import style from "./Cart.css"
const Cart = () => {
  return (
    <div >
        <h1>My Cart</h1>
        <img src="https://neelima-git.github.io/jiomart-ui-clone-react/static/media/emptycart.df76e11b.svg" alt="" />
        <h3>Your Cart is empty!</h3>
        <p>You have no items added in cart</p>
        <button className="primary">Add Products</button>
    </div>
  )
}

export default Cart