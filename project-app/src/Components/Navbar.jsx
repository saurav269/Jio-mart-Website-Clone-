import { Box, Image, Flex, Input } from "@chakra-ui/react";
import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import Hamb from "./Hamb"

const Navbar = () => {
  return (
    <Box
      h={20}
      w={"100%"}
      bg={"#008ECC"}
      color={"white"}
      border={"0px solid red"}
      padding={"20px 50px 0px 50px"}
    >
      <Flex justify={"space-evenly"} align={"center"}>
        <Hamb/>
        <Image
          w={"8.5%"}
          // src="https://drive.google.com/uc?export=view&id=1lok0OGZD_3dugOC6v3venf7TZkJIvqdP"
          src="https://www.jiomart.com/assets/version1673548809/smartweb/images/jiomart_logo_beta.svg"
          alt="logo"
        />
        <Input
          htmlSize={100}
          bg={"white"}
          width="auto"
          color={"black"}
          placeholder="Search essentials,groceries, and more..."
        />
        <Flex justify={"space-around"}  w={"11%"} border={"0px solid red"}  >
          <FaUserAlt size={27} />
          <h3>Sign in / Sign up</h3>
        </Flex>
        <Flex justify={"space-between"}  w={"4.7%"}>
          <FiShoppingCart size={27} />
          <h3>Cart</h3>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
