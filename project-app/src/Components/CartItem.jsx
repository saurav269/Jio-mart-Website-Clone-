import React, { forwardRef, useEffect, useState } from 'react';
import {Heading} from "@chakra-ui/react";
import { BsWindowSidebar } from 'react-icons/bs';
// import { useNavigate } from 'react-router-dom';

 export const CartItem = ({elem,cart, onChange}) => {
  // const navigate = useNavigate();

  const [quantity, setQuantity] = useState(0)

    const [currentElement] = useState(() => {
        return cart.find((el) => el.id === elem.id && setQuantity(el.qty))
      })
   
    
      const deleteItem = (index) => {
        cart.splice(index, 1)
        localStorage.setItem('CartData', JSON.stringify(cart));
        cart=JSON.parse(localStorage.getItem("CartData"))||[]
        window.location.reload()
      }

      useEffect(()=>{
        cart=JSON.parse(localStorage.getItem("CartData"))||[]
      },[deleteItem])

    useEffect(() => {
        if (quantity <= 0) {
            cart?.find((item, index) => item.id === elem.id && deleteItem(index))
        }
        onChange()
    }, [quantity])


    const increment = () => {
        cart.find((item) => item.id === elem.id && item.qty++ && setQuantity(item.qty))
        localStorage.setItem('CartData', JSON.stringify(cart));
    }

    const decrement = () => {
        cart.find((item) => item.id === elem.id && item.qty > 0 && item.qty-- && setQuantity(item.qty))
        localStorage.setItem('CartData', JSON.stringify(cart));
    }
    const goToDetailPage=()=>{
      // navigate(`/product/${elem.category}/${elem.name}/${elem.id}`)
    }

  return (
    <div style={{ "padding": "10px" }}>
                  <div style={{ "padding": "10px", "display": "flex" }}>
                    <div style={{ "display": "flex", "width": "150px", "height": "150px" }}>
                      <img src={elem.image} />
                    </div>
                    <div>
                      <Heading fontSize="18px" padding="10px" onClick={goToDetailPage}>{elem.name}</Heading>
                      <div style={{ "display": "flex" }} onClick={goToDetailPage}>
                        <Heading fontSize="14px" padding="15px" >₹ {elem.price1*elem.qty}.00</Heading>
                        <Heading fontSize="14px" padding="15px" textDecoration="line-through" >₹ {Math.floor(Number(elem.price2))*elem.qty}.00</Heading>
                        <Heading color="rgb(0,161,82)" fontSize="14px" padding="15px">You Save ₹{Math.floor(Number(elem.price2))*elem.qty-elem.price1*elem.qty}.00</Heading>
                      </div>
                      <div style={{ "display": "flex" }}>
                        <Heading fontSize="13px" fontWeight="90px" padding="10px">Category :</Heading>
                        <Heading fontSize="13px" fontWeight="90px" padding="10px" color="rgb(0,142,204)">{elem.category}</Heading>
                      </div>
                      <div style={{ "display": "flex" }}>
                        <Heading fontSize="13px" fontWeight="90px" padding="10px" >Sold By</Heading>
                        <Heading fontSize="13px" fontWeight="90px" padding="10px" color="rgb(0,142,204)">Reliance Retail</Heading>
                        <div style={{ display: "flex", justifyContent: "right", gap: "10px" }}><div style={{ justifyContent: "center", textAlign: "center", fontSize: "25px", cursor: "pointer", backgroundColor: "rgb(0,142,204)", height: "40px", width: "40px", color: "white", borderRadius: "50%" }} onClick={decrement}>-</div><div style={{ height: "30px", width: "35px", fontSize: "20px" }}>{quantity}</div>
                          <div style={{ marginLeft: "-15px", justifyContent: "center", textAlign: "center", fontSize: "25px", cursor: "pointer", backgroundColor: "rgb(0,142,204)", height: "40px", width: "40px", color: "white", borderRadius: "50%" }} onClick={increment}>+</div></div>
                      </div>
                    </div>
                  </div>
                  <div className="line" style={{ "width": "100%" }}></div>
                </div>
  )
}