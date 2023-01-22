// import { Slider } from '@chakra-ui/react'
import Slider from "./Slider/Slider";
import React from "react";
import { Box, Image } from "@chakra-ui/react";
import MenuBar from "./MenuBar";
import Slider2 from "./Slider2/Slider2"
import Footer from "./Footer";
import Slider3 from "./Slider3/Slider3";

const HeroSection = () => {
  return (
    <>
    <MenuBar/>
    <Box display={"block"}  width={"98%"} margin={"auto"} mt={"132px"}>
      
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
      <Slider2/>
      <Slider3/>
      <Footer/>
    </Box>
    </>
  );
};

export default HeroSection;
