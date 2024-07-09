import React from "react";
import { LiaTimesSolid } from "react-icons/lia";
import "./CartCard.css";

const CartCard = () => {
  return (
    <div className="cart-card-container">
      <LiaTimesSolid color="red" />
      <img src={require("../Assets/Vase.png")} alt="vase" />
      <p>LALUDE DINNER PLATE </p>
      <p>#55,000</p>
      <div>
        <span>-</span>
        <span>1</span>
        <span>+</span>
      </div>
      <p>#110,000</p>
    </div>
  );
};

export default CartCard;
