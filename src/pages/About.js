import React from "react";
import { Col, Container, Row } from "reactstrap";
import About1 from "../assets/about.png";
import About2 from "../assets/about1.png"
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/About.css";
function About() {
  return (
    <div>
      <Navbar/>
    <div className="about">
     
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${About1})` }}
      ></div>
      <div>
      
      </div>

        <p>
        The “Efficient Shipping System” is online marketplace which provides platform
         for customer to connect with many transporters within a click. This saves customer’s 
         time as well as money. The transporter can get information of many products posted by 
         customer’s and it is helpful to expand their business.
         This system used for shipping purpose, where customers can connect directly to the transporters. 
         Once customer puts their item details on site then they can directly connect with many transporters 
         who are ready to ship their material/item. This system is customer friendly and affordable. 
         This system will create virtual competition between transporters which will benefit the end user.
        </p>
      </div>
      <Footer/>
      </div>
  );
}

export default About;
