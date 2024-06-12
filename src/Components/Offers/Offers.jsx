import React from "react";
import "./Offers.css";
import exclusive_image from "../Assets/accessories.png";

const Offers = () => {
  return (
    <div className="offers">
      <div className="offers-left">
        <h1>Check Out</h1>
        <h1>The Offers</h1>
        <p>In Accessories Collections</p>
        {/*<button>Check now</button>*/}
      </div>
      <div className="offers-right">
        <img src={exclusive_image} alt="" />
      </div>
    </div>
  );
};

export default Offers;
