import React,{useState} from 'react'
import { useDisclosure } from '@chakra-ui/react'
import {  Heading,Box,Button,Text,Flex,Modal,ModalOverlay,ModalContent,ModalHeader,ModalCloseButton,ModalBody,ModalFooter } from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';

const Payment = () => {
  const navigate=useNavigate()

  let cart = JSON.parse(localStorage.getItem("CartData"))||[];

  let totalPrice1 = cart.reduce((acc, elem) => {
    return acc + (elem.qty * (Math.floor(Number(elem.price2))))
  }, 0)

  let totalPrice2 = cart.reduce((acc, elem) => {
    return acc + (elem.qty * (elem.price1))
  }, 0)

    const OverlayOne = () => (
    <ModalOverlay
      bg='blackAlpha.300'
      backdropFilter='blur(10px) hue-rotate(90deg)'
    />
  )

   const { isOpen, onOpen, onClose } = useDisclosure()
  const [overlay, setOverlay] = React.useState(<OverlayOne />)

  const payment=()=>{
    let emptyCart=[]
     localStorage.setItem("CartData",JSON.stringify(emptyCart))
     navigate("/")
  }

  return (   
    <Flex >
      <Box margin="120px 00px" p="20px"  w="60%" >
              <Heading fontSize="21px" py="20px">Payment Details</Heading>
              <form>
            <Box my="20px">
             <input type="text" placeholder='Enter Card holder name'  style={{border:"none", outline:"none"}}/>

            </Box>
            <Box my="20px">
             <input type="text" minlength="16" maxlength="16" placeholder='Enter Card Number'  style={{border:"none", outline:"none"}}/>

            </Box>
            <Flex my="20px" marginLeft="350px" gap="50px">
                <Box>
                <input type="month" id="bdaymonth" placeholder='Expiry(Mon/Yr)'  style={{border:"none", outline:"none"}}/>
                </Box>
                             
            </Flex>
            <Box>
                     
                     <input type="text"  maxlength="3" placeholder='Enter CCV'  style={{border:"none", outline:"none"}}/>
                     </Box>
            <Box my="10px">
                <Button backgroundColor="#008ecc"  color="white" margin="30px 70px 0px 0px" onClick={() => {
          setOverlay(<OverlayOne />)
          onOpen()
        }}>Place Order</Button>
            </Box>
            </form>
             <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent>
          <ModalHeader>Thankyou For Shopping !</ModalHeader>
          <ModalBody>
            <Heading fontSize="20px">Your Order Placed Succesfully... </Heading>
          </ModalBody>
          <ModalFooter>
            <Button onClick={payment}> GoTo Home Page</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
            </Box>

            <Box>
               <div style={{ "backgroundColor": "white", padding: "20px" }}>
              <Heading fontSize="21px" padding="120px 00px">Payment Details</Heading>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Heading color="gray" fontSize="15px" fontWeight="90px" padding="20px 10px">MRP Total:</Heading>
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
            </Box>
    </Flex>
   
  )
}

export default Payment