import { Heading } from "@chakra-ui/layout";
import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item2";
import "./styles2.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 300, itemsToShow: 2 },
  { width: 400, itemsToShow: 3 },
  { width: 500, itemsToShow: 4 },
  { width: 600, itemsToShow: 5 },
  { width: 700, itemsToShow: 6 },

  { width: 800, itemsToShow: 7 },
];

export default function Slides() {
  return (
    <>
    <Heading mt={"15px"} mb={"-20px"} textAlign={"left"} as={"h3"} size={"md"}>Popular Electronics</Heading>
      <div className="Slides">
        <Carousel breakPoints={breakPoints}>
          <Item>
            <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1674034825_Televisions.jpg" />
          </Item>
          <Item>
            <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1674197968_Top_rated_Refrigerators.jpg" />
          </Item>
          <Item>
            <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1674197980_Trending_Laptop.jpg" />
          </Item>
          <Item>
            <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1674197987_Trending_Audio_Accessories_.jpg" />
          </Item>
          <Item>
            <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1674197994_Top_selling_washing_machines.jpg" />
          </Item>
          <Item>
            <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1674198004_Best_deals_on_keyboard_mouse_more.jpg" />
          </Item>
          <Item>
            <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1674198011_Best_Selling_Smartwatches.jpg" />
          </Item>
          <Item>
            <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1674198017_Home_Kitchen_Appliances.jpg" />
          </Item>
          <Item>
            <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1674198024_high_capacity_storage_devices.jpg" />
          </Item>
          <Item>
            <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1674198030_Bestselling_Cameras_Accessories_.jpg" />
          </Item>
          <Item>
            <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1674035212_Trimmers_nd_Stylers.jpg" />
          </Item>
          <Item>
            <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1674035244_Monitors_nd_Printers.jpg" />
          </Item>
          <Item>
            <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1674035265_Tablets.jpg" />
          </Item>
          <Item>
            <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1674035291_Kitchen_Appliances.jpg" />
          </Item>
          <Item>
            <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1674035309_Bluetooth_Speakers.jpg" />
          </Item>
        </Carousel>
      </div>
    </>
  );
}

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
