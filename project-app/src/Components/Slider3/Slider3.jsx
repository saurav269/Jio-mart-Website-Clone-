import { Heading } from "@chakra-ui/layout";
import React from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import Item from "./Item3";
import "./styles3.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 300, itemsToShow: 2 },
  { width: 400, itemsToShow: 3 },
  { width: 500, itemsToShow: 4 },
  { width: 600, itemsToShow: 5 },
  { width: 700, itemsToShow: 6 },

  { width: 800, itemsToShow: 7 },
];

export default function Slider3() {
  return (
    <>
      <div className="Slides">
        <Carousel breakPoints={breakPoints}>
          <Item>
            <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1674113113_Home_and_Kitchen_Appliances.jpg" />
          </Item>
          <Item>
            <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1674114587_Men_and_Women_Footwear.jpg" />
          </Item>
          <Item>
            <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1674114644_Accessories.jpg" />
          </Item>
          <Item>
            <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1674114698_Mom_and_Baby_Care.jpg" />
          </Item>
          <Item>
            <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1674114770_Bath_and_Body_Essentials.jpg" />
          </Item>
          <Item>
            <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1674114829_Health_and_Wellness_Essentials.jpg" />
          </Item>
          <Item>
            <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1674114890_Blockbuster_deals_on_Kitchenware.jpg" />
          </Item>
          <Item>
            <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1674114945_Best_of_Dine_and_Serveware.jpg" />
          </Item>
          <Item>
            <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1674114500_Soft_Toys.jpg" />
          </Item>
          <Item>
            <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1674113590_Cleaning_Essential.jpg" />
          </Item>
          <Item>
            <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1674113352_Audio_Gear.jpg" />
          </Item>
          <Item>
            <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1674113459_Food_and_Beverages.jpg" />
          </Item>
          <Item>
            <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1674113405_Smartphones.jpg" />
          </Item>
          <Item>
            <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1674113631_Edible_Oil_and_Ghee.jpg" />
          </Item>
          <Item>
            <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1674113286_Dry_Fruits_and_Nuts.jpg" />
          </Item>
        </Carousel>
      </div>
    </>
  );
}

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
