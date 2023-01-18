import { Box, Image, Heading, Text, Input, Button } from '@chakra-ui/react'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react'
import { useRef, useState } from 'react'

const initialState = {
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    password: "",
    confirmPassword: "",
    otp: ""
};

export function LoginSignup() {
  const [userData, setUserData] = useState(initialState)
  const btnRef = useRef();

  const [showForm1, setShowForm1] = useState(true)
  const [showForm2, setShowForm2] = useState(false)

  const getInput = (e) => {
    let name = e.target.name;
    // console.log(e.target.name)
    setUserData(prev => prev= {...prev,[name]:e.target.value} )
    if(e.target.name === "mobile"){

        btnRef.current.disabled = false
    }
  }
// console.log(userData,"user data object")
  const toggleForms = () => {
    // console.log("clicking of proceed button");
    setShowForm1((prev) => !prev)
    setShowForm2((prev) => !prev)
  }

  return (
    <Box
      display="flex"
      borderRadius="10px"
      boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;"
      width="70%"
      margin="auto"
      marginTop="70px"
    //   bg="pink.100"
    >
      <Box>
        <Image
          src="https://www.jiomart.com/msassets/images/login-banner.jpg"
          alt="loginImage"
          borderRadius="10px 0px 0px 10px"
        />
      </Box>

      <Box w="55%">
        {showForm1 && (
          <>
            <Box
              align="left"
            //   border="1px solid blue"
              margin="auto"
              w="50%"
              mt="20px"
            >
              <Heading>Sign In</Heading>
              <Text>Sign in to access your Orders, Offers and Wishlist.</Text>
            </Box>
{/* ---------------------------------------------1st form conditional rendering-------------------------------------------------------------- */}
            <FormControl width="50%" margin="auto" mt="100px">
              <FormLabel>Mobile Number</FormLabel>
              <Input
                border="2px solid gray"
                type="number"
                name="mobile"
                value={userData.mobile}
                onChange={getInput}
              />

              <Button
                mt="20px"
                isDisabled={userData.mobile.length === 0}
                ref={btnRef}
                onClick={toggleForms}
                bg="orange"
              >
                Proceed
              </Button>
            </FormControl>
          </>
        )}
{/*-----------------------------------2nd form conditional rendering------------------------------------------------------  */}
        {showForm2 && (

            <>
            <Heading>Sign Up</Heading>
          <FormControl width="50%" margin="auto" mt="50px">
            <FormLabel>Start by entering your First Name</FormLabel>
            <Input
              id="firstName"
              name="firstName"
              placeholder="First Name"
              border="2px solid gray"
              type="text"
            //   value={userData.firstName}
              onChange={getInput}
            />
            <Input
              id="lastName"
              name="lastName"
              placeholder="Last Name"
              border="2px solid gray"
              type="text"
              value={userData.lastName}
              onChange={getInput}
            //   ref={lastNameRef}
              isDisabled={userData.firstName.length === 0}
            />
            <Input
              id="email"
              name="email"
              placeholder="Enter Email"
              border="2px solid gray"
              type="text"
              value={userData.email}
              onChange={getInput}
            //   ref={emailRef}
              isDisabled={userData.lastName.length === 0}
            />
            <Input
              name="password"
              placeholder="Password"
              border="2px solid gray"
              type="password"
              value={userData.password}
              onChange={getInput}
            //   ref={passwordRef}
              isDisabled={userData.email.length === 0}
            />
            <Input
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm Password"
              border="2px solid gray"
              type="password"
              value={userData.confirmPassword}
              onChange={getInput}
            //   ref={confirmPasswordRef}
              isDisabled={userData.password.length === 0}
            />
            <FormLabel>we have sent you an OTP on you mobile number +91 {userData.mobile}</FormLabel>
            <Input
              name="otp"
              placeholder="Enter OTP"
              border="2px solid gray"
              type="number"
              value={userData.otp}
              onChange={getInput}
            //   ref={otpRef}
              isDisabled={userData.confirmPassword.length === 0}
            />
            <Button onClick={toggleForms} mt="20px" bg="red.500" >
              Cancel
            </Button>
            <Button
              mt="20px"
              isDisabled={userData.otp.length === 0}
              bg="orange"
            >
              Verify
            </Button>
          </FormControl>
          </>
        )}
      </Box>
    </Box>
  )
}
