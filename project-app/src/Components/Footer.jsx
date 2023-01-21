import React from "react";
import styled from "styled-components";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="Wrapper">
      <div className="Grid">
        <div className="Div">
          <h5>MOST POPULAR CATEGORIES</h5>
          <p>Staples</p>
          <p>Beverages</p>
          <p>Personal Care</p>
          <p>Home Care</p>
          <p>Fruits and Vegetables</p>
          <p> Baby Care</p>
          <p>Snacks & Branded Foods</p>
          <p>Dairy & Bakery</p>
        </div>
        <div className="Div">
          <h5>CUSTOMER SERVICES</h5>
          <p>About Us</p>
          <p>FAQ</p>
          <p>Terms and conditions</p>
          <p>Privacy policy</p>
          <p>E-waste Policy</p>
          <p>Cancellation and return policy</p>
        </div>
        <div className="Div" >
          <h5>CONTACT US</h5>
          <p>
            WhatsApp us :
            <span style={{ color: "rgb(33, 131, 201)", fontWeight: "bold" }}>
              70003 70003
            </span>{" "}
          </p>
          <p>
            Call Us :{" "}
            <span style={{ color: "rgb(33, 131, 201)", fontWeight: "bold" }}>
              {" "}
              1800 890 1222{" "}
            </span>{" "}
            <br />
            8:00 AM to 8:00 PM, 365 days
          </p>
          <p>
            Please note that you are accessing the BETA Version of
            <span style={{ color: "rgb(33, 131, 201)" }}> www.jiomart.com</span>
          </p>
          <p>
            Should you encounter any bugs, glitches, lack of functionality,
            delayed deliveries, billing errors or other problems on the beta
            website, please email us on <span></span>
          </p>
          <h5>DOWNLOAD APP</h5>
          <div className="ImageHolder">
            <img
              src="https://www.jiomart.com/images/cms/wysiwyg/app-icons/play_store.png"
              alt=""
            />
            <img
              className="image"
              src="https://www.jiomart.com/images/cms/wysiwyg/app-icons/ios_store.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <hr style={{marginTop:"20px", color:"rgb(169, 172, 172)"}} />
      
      <div style={{display:"flex"}}>
        <p>Best viewed on Microsoft Edge 81+, Mozilla Firefox 75+, Safari 5.1.5+, Google Chrome 80+</p>
        <p>© 2022 All rights reserved. Reliance Retail Ltd.</p>
      </div>
    </div>
  );
};

export default Footer;

// const Wrapper = styled.div`
//   border: 0px solid black;
//   width: 100%;
//   // position: fixed;
//   // left: 0;
//   // bottom: 10px;
//   background-color: rgb(235, 233, 233);
//   padding:50px 0px 50px 0px;
// `;
// const Grid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(3, 1fr);
//   width: 80%;
//   margin: auto;
//   @media (max-width: 790px){
//     grid-template-columns: repeat(2, 1fr);
//     overflow: scroll;
//   }
//   @media (max-width: 350px){
//     grid-template-columns: repeat(1, 1fr);
//     overflow: scroll;
//   }
// `;

// const Div = styled.div`
//   border: 0px solid red;
//   text-align: left;
//   line-height: 2;
// `;
