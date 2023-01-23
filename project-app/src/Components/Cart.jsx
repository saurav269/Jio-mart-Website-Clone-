import { Box, Flex, Heading, Input, Button, Image } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { BsClipboardCheck } from "react-icons/bs";
import { HiShoppingCart } from "react-icons/hi";
import { MdOutlinePayment } from "react-icons/md"
import { useNavigate } from "react-router-dom";
import { CartItem } from "./CartItem";

const Cart = () => {
  let cart = JSON.parse(localStorage.getItem("CartData")) || [];

  const [state, updateState]=useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);

  let totalPrice1 = cart.reduce((acc, elem) => {
    return acc + (elem.qty * (Math.floor(Number(elem.price2))))
  }, 0)

  let totalPrice2 = cart.reduce((acc, elem) => {
    return acc + (elem.qty * (elem.price1))
  }, 0)


  return (

    <Flex direction="column" height="450px">
      {/* //parent */}
      <Flex direction="row" padding="30px 50px" justifyContent="space-between">

        <Box><Heading fontSize="23px">My Cart</Heading></Box>
        {cart.length > 0 && <Flex>
          <Box> <ul style={{ "display": "flex", "list-style-type": "none" }}>
            <li><HiShoppingCart size="22px" color="rgb(0,142,204)" /></li>
            <li><Heading fontSize="13px" fontWeight="90px">My Cart</Heading></li>
            <li><div className="line" /></li>
            <li><BsClipboardCheck size="21px" color="rgb(0,142,204)" /></li>
            <li><Heading fontSize="13px" fontWeight="90px">Order Summary</Heading></li>
            <li><div className="line" /></li>
            <li><MdOutlinePayment size="21px" color="rgb(0,142,204)" /></li>
            <li><Heading fontSize="13px" fontWeight="90px">Payment</Heading></li>
          </ul></Box>

        </Flex>}

      </Flex>


      {cart.length > 0 ? <Flex direction="row" justifyContent="space-between" padding="30px" px="30px">


        <Box width="55%" height="600px" overflow="scroll" >
          <Box backgroundColor="white" height="auto" >
            <Heading fontSize="23px" padding="30px">Basket { } </Heading>

            {/* add to cart will show here */}

            {cart.length > 0 && cart.map((e) => {
              return <CartItem elem={e} cart={cart} onChange={forceUpdate}/>
            })}
          </Box>
        </Box>
        <Box width="40%">
          <Flex direction="column" gap="30px">

            <div style={{ "padding": "10px", "backgroundColor": "white" }}>
              <Heading fontSize="21px" padding="10px">Apply Coupon</Heading>
              <Input placeholder="Enter Coupon Code" size='sm' variant='flushed' padding="10px" />
              <Button colorScheme='blue' size='md' variant="link" padding="10px">Apply</Button>
            </div>

            <div style={{ "backgroundColor": "white", padding: "20px" }}>
              <Heading fontSize="21px" padding="10px">Payment Details</Heading>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Heading color="gray" fontSize="15px" fontWeight="90px" padding="10px">MRP Total:</Heading>
                <Heading color="black" fontSize="20px" fontWeight="bold" padding="10px">₹{totalPrice1}.00</Heading>
              </div>
              <hr style={{ "color": "gray" }} />
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Heading color="gray" fontSize="15px" fontWeight="90px" padding="10px">Discount</Heading>
                <Heading color="black" fontSize="20px" fontWeight="bold" padding="10px">-₹{totalPrice1-totalPrice2}.00</Heading>
              </div>
              <hr style={{ "color": "gray" }} />
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Heading color="gray" fontSize="15px" fontWeight="bold" padding="10px">Total Amount</Heading>
                <Heading color="black" fontSize="20px" fontWeight="bold" padding="10px">₹{totalPrice2}.00</Heading>
              </div>
            </div>
            <Button colorScheme='blue' variant='solid' width="230px" marginLeft="auto"><a href="/checkout">Place Order</a> </Button>
          </Flex>
        </Box>



        </Flex> : <Flex display="column" justifyContent="center" margin="auto">
          <Image boxSize='200px'paddingRight="20px" margin="auto" src="https://www.jiomart.com/msassets/images/emptycart.svg" alt="empty cart" />
          <Flex><Heading fontSize="18px"  textAlign="center">Your Cart is empty!</Heading></Flex> </Flex>}
          <p fontSize="1.1em" fontWeight="300">You have no items added in cart</p>
          
          <Button colorScheme='blue' variant='solid' width="160px"  margin="auto"><a href="/">Place Order</a> </Button>


</Flex>


  );
};

export default Cart;