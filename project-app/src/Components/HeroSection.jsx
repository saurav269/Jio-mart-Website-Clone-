// import { Slider } from '@chakra-ui/react'
import Slider from "./Slider/Slider";
import React from "react";
import { Box, Image } from "@chakra-ui/react";
import MenuBar from "./MenuBar";

const HeroSection = () => {
  return (
    <Box  width={"98%"} margin={"auto"} mt={"80px"}>
      <MenuBar/>
      <Slider />

      <Image
        mt={"15px"}
        src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1672856821_blockbuster.jpg"
        alt="hero"
      />
      <Image
        src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1673890326_1680x320.jpg"
        alt="hero"
      />
      
        <Image
          mt={"15px"}
          w={"100%"}
          src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1668663411_Sim-Delivery_1240_X_194_px_web.jpg"
          alt="hr"
        />
        <Image
          w={"100%"}
          src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1673547289_Aaj-ki-Deals_Web.jpg"
          alt="hr"
        />
    
    </Box>
  );
};

export default HeroSection;
