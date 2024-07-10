import React from "react";
import { LiaTimesSolid } from "react-icons/lia";
import "./CartCardTwo.css";

const CartCardTwo = () => {
  return (
    <div className="cart-card-container">
      <LiaTimesSolid color="red" />
      <img src={require("../Assets/Vase.png")} alt="vase" />
      <p>IYAGANKU MATIC VASE </p>
      <p>#170,000</p>
      <div>
        <span>-</span>
        <span>1</span>
        <span>+</span>
      </div>
      <p>#170,000</p>
    </div>
  );
};

export default CartCardTwo;
