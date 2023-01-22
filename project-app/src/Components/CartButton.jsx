import { useState } from "react"


function CartButton(){
    const[quantity, setQuantity] = useState(1)

    return(
        <div className="change_quantity_container">
        <button className="btn1"
        disabled={quantity<=0}
         data-cy="inc_btn" onClick={()=> setQuantity(quantity -1)}>-</button>
        <p className="quantity">{quantity}</p>
        <button className="btn1"
         data-cy="dec_btn" onClick={()=> setQuantity(quantity+1)}>+</button>
        </div>
    )

}
export default CartButton
