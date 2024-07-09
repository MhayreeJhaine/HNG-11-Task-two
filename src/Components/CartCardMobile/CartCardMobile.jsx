import React from "react";
import { LiaTimesSolid } from "react-icons/lia";
import "./CartCardMobile.css";

const CartCardMobile = () => {
  return (
    <div className="cart-card-mobile-container">
      <LiaTimesSolid color="red" />
      <div>
        <img src={require("../Assets/Vase.png")} alt="vase" />
        <p>LALUDE DINNER PLATE </p>
      </div>
      <div>
        <p>PRICE:</p>
        <p>#55,000</p>
      </div>
      <div>
        <p>QUANTITY:</p>
        <p className="box">
          <span>-</span>
          <span>1</span>
          <span>+</span>
        </p>
      </div>
      <div>
        <p>SUBTOTAL:</p>
        <p>#110,000</p>
      </div>
    </div>
  );
};

export default CartCardMobile;
