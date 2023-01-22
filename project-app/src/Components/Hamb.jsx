import {
  Button,
  color,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Input,
  useDisclosure,
  Text,
  Box,
  Heading,
} from "@chakra-ui/react";
import React from "react";

import { RxHamburgerMenu } from "react-icons/rx";

import { FaRegUserCircle } from "react-icons/fa";

function DrawerExample() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Button ref={btnRef} colorScheme="#008ECC" onClick={onOpen}>
        <RxHamburgerMenu size={"25px"} />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton color={"white"} />
          <DrawerHeader bg={"#008ECC"} color={"white"}>
            <Flex align={"center"} justify={"space-between"} w={"55%"}>
              <FaRegUserCircle />
              Hello, Sign in
            </Flex>
            <Button
              bg={"#008ECC"}
              color={"white"}
              border={"1px solid white"}
              h={"30px"}
              w={"120px"}
            >
              Account
            </Button>
            <Button
              bg={"#008ECC"}
              color={"white"}
              border={"1px solid white"}
              ml={"10px"}
              h={"30px"}
              w={"120px"}
            >
              Orders
            </Button>
          </DrawerHeader>

          <DrawerBody>
            <Box lineHeight={"40px"}>
              <Text fontSize={"17px"} color={"grey"}>
                Home
              </Text>
              <Text fontSize={"17px"} color={"grey"}>
                Shop by Category
              </Text>
              <Text fontSize={"17px"} color={"grey"}>
                My List
              </Text>
              <Text fontSize={"17px"} color={"grey"}>
                JioMart Wallet
              </Text>
              <Text fontSize={"17px"} color={"grey"}>
                JioMart Gift Store
              </Text>
              <Text fontSize={"17px"} color={"grey"}>
                JioMart Gift Card
              </Text>
              <Text fontSize={"17px"} color={"grey"}>
                GoGreen with JioMart
              </Text>
              <Text fontSize={"17px"} color={"grey"}>
                Coupon Store
              </Text>
              <Text fontSize={"17px"} color={"grey"}>
                All Offers
              </Text>
              <hr
                style={{
                  border: "4px solid rgb(213, 210, 210)",
                  width: "100%",
                }}
              />
              <Text fontSize={"17px"} color={"grey"}>
                My Account
              </Text>
              <Text fontSize={"17px"} color={"grey"}>
                Need Help
              </Text>
              <Text fontSize={"17px"} color={"grey"}>
                About Us
              </Text>
              <Text fontSize={"17px"} color={"grey"}>
                Guide
              </Text>
              <hr
                style={{
                  border: "4px solid rgb(213, 210, 210)",
                  width: "100%",
                }}
              />
              <Heading as={"h4"} size={"10px"}>
                CONTACT US
              </Heading>
              <Flex  width={"80%"}>
                <Text fontSize={"17px"} color={"grey"}>
                  WhatsApp Us :
                </Text>
                <span style={{ color: "rgb(33, 131, 201)" }}>8798657767</span>{" "}
              </Flex>
              <Flex  width={"70%"}>
                <Text fontSize={"17px"} color={"grey"}>
                  Call Us :
                </Text>
                <span  style={{ color: "rgb(33, 131, 201)",width:"100%" }}>1800 890 1222</span>{" "}
              </Flex>
              <Text fontSize={"17px"} color={"grey"} w={"100%"}>
              8:00 AM to 8:00 PM, 365 days
              </Text>
             
            </Box>
          </DrawerBody>

          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default DrawerExample;
