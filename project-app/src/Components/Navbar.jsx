import { Box, Image, Flex, Input, Hide, Button  } from "@chakra-ui/react";
import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import Hamb from "./Hamb"
import {ChevronDownIcon} from "@chakra-ui/icons"
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from '@chakra-ui/react'
import { useState } from "react";
import { updateUserAuthStatus } from "../Redux/AuthReducer/action";

const Navbar = () => {
  const [showLogin, setShowLogin] = useState(true);
  const [showMenu,setShowMenu] = useState(false);

  let currentUser = JSON.parse(localStorage.getItem("currentUser"))
  // getLogin();


  console.log(currentUser,"current user")
  const location = useLocation();

  // console.log(location,"from navbar")
  // console.log(currentUser,"from navbar")
  //-------------------------if statements------------------------------------------------------------------
  if(currentUser && currentUser.isAuth === true){
     if(showLogin===true){
      setShowLogin(false)
     }
     if(showMenu===false){
        setShowMenu(true);
     }
  }
  //------------------------------FUNCTIONS---------------------------------------------------
  const logout=()=>{
    console.log(currentUser.id,"currentUser.id")
    updateUserAuthStatus(currentUser.id,{isAuth:false})
    currentUser.isAuth = false;
    localStorage.setItem("currentUser",JSON.stringify(currentUser))
    if(showLogin===false){
      setShowLogin(true)
     }
     if(showMenu===true){
        setShowMenu(false);
     }
    //  localStorage
  }

  return (
    <Box
      h={20}
      w={"100%"}
      bg={"#008ECC"}
      color={"white"}
      border={"0px solid red"}
      padding={"20px 50px 0px 50px"}
      position="fixed"
      zIndex={"1"}
      top={0}
    >
      <Flex justify={"space-evenly"} align={"center"}>
        <Hamb/>
        <Link to={"/"}>
        <Image
          w={"65.5%"}
          // src="https://drive.google.com/uc?export=view&id=1lok0OGZD_3dugOC6v3venf7TZkJIvqdP"
          src="https://www.jiomart.com/assets/version1673548809/smartweb/images/jiomart_logo_beta.svg"
          alt="logo"
        />
        </Link>
        <Hide below="md">
        <Input
         
         htmlSize={100}
         bg={"white"}
         width="auto"
         color={"black"}
         placeholder="Search essentials,groceries, and more..."
       />
        </Hide>
    
        {showLogin && <Flex justify={"space-around"}  w={{md:"15%",lg:"13%"}} border={"0px solid red"} >
        <Link style={{display:"flex"}} to={'/login'}>
          <FaUserAlt size={18} />
          <h3>Sign in / Sign up</h3>
          </Link>
        </Flex>}
        {showMenu &&
            <Menu  >
              <MenuButton bg="#008ECC" as={Button} rightIcon={<ChevronDownIcon />}>
                Hi, {currentUser.firstName}
              </MenuButton>
              <MenuList zIndex="10">
                <MenuItem color="black">My Orders</MenuItem>
                <MenuItem color="black">My Profile</MenuItem>
                <MenuItem color="black">Track Orders</MenuItem>
                <MenuItem color="black">My Cart</MenuItem>
                <MenuItem color="black" onClick={logout} >Logout</MenuItem>
              </MenuList>
            </Menu>
          }
        

        <Flex justify={"space-between"}  w={{md:"6%",lg:"4.7%"}}>
          <FiShoppingCart size={27} />
          <h3>Cart</h3>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;

// import { Box, Image, Text, Input, Button } from '@chakra-ui/react'
// import { useEffect, useState } from 'react'
// // import { LoginSignup } from '../pages/LoginSignup';
// import {ChevronDownIcon} from "@chakra-ui/icons"
// import { Link, useLocation } from 'react-router-dom'
// import {
//   Menu,
//   MenuButton,
//   MenuList,
//   MenuItem,
//   MenuItemOption,
//   MenuGroup,
//   MenuOptionGroup,
//   MenuDivider,
// } from '@chakra-ui/react'
// import { getUserLoginDetails, updateUserAuthStatus } from '../Redux/authentication/action'
// // import { mob } from '../pages/LoginSignup'
// // import { useDispatch } from 'react-redux'



// export function Navbar() {
//   //------------------------HOOKS--------------------------------------------------------------
  
//   const [showLogin, setShowLogin] = useState(true);
//   const [showMenu,setShowMenu] = useState(false);
//   // const dispatch = useDispatch()
//   let currentUser = JSON.parse(localStorage.getItem("currentUser"))
//   // getLogin();


//   console.log(currentUser,"current user")
//   const location = useLocation();

//   // console.log(location,"from navbar")
//   // console.log(currentUser,"from navbar")
//   //-------------------------if statements------------------------------------------------------------------
//   if(currentUser && currentUser.isAuth === true){
//      if(showLogin===true){
//       setShowLogin(false)
//      }
//      if(showMenu===false){
//         setShowMenu(true);
//      }
//   }
//   //------------------------------FUNCTIONS---------------------------------------------------
//   const logout=()=>{
//     console.log(currentUser.id,"currentUser.id")
//     updateUserAuthStatus(currentUser.id,{isAuth:false})
//     currentUser.isAuth = false;
//     localStorage.setItem("currentUser",JSON.stringify(currentUser))
//     if(showLogin===false){
//       setShowLogin(true)
//      }
//      if(showMenu===true){
//         setShowMenu(false);
//      }
//     //  localStorage
//   }
// //  async function getLogin(){
// //   console.log(mob)
// //      console.log( await dispatch(getUserLoginDetails(mob)))
// //      console.log(currentUser)
// //   }
  
//   //--------------------------------RETURN statement------------------------------------------------------------
//   return (
//     <Box boxShadow="xl">
//       <Box
//         display="flex"
//         gap="30px"
//         // border="1px solid black"
//         justifyContent="space-between"
//       >
//         <Box>
//           <Link to="/">
//             <Image src="jioMart2.png" alt="logo" w="60%" />
//           </Link>
//         </Box>
//         {/* <Box
//           display="flex"
//           w="700px"
//           gap="50px"
//           justifyContent="space-around"
//           // border="1px solid black"
//           alignItems="center"
//         >
//           <Text>MEN</Text>
//           <Text>WOMEN</Text>
//           <Text>BOYS</Text>
//           <Text>GIRLS</Text>
//         </Box> */}

//         <Box display="flex" alignItems="center">
//           {showLogin && <Link to="/loginSignup">Login/Signup</Link>}
//           {showMenu &&
//             <Menu>
//               <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
//                 Hi, {currentUser.firstName}
//               </MenuButton>
//               <MenuList>
//                 <MenuItem>My Orders</MenuItem>
//                 <MenuItem>My Profile</MenuItem>
//                 <MenuItem>Track Orders</MenuItem>
//                 <MenuItem>My Cart</MenuItem>
//                 <MenuItem onClick={logout} >Logout</MenuItem>
//               </MenuList>
//             </Menu>
//           }
//         </Box>
//         <Box display="flex" alignItems="center" gap="50px" pr="100px">
//           <Input placeholder="Search" border="1px solid black" />
//           <Text>CART</Text>
//         </Box>
//       </Box>
//     </Box>
//   )
// }