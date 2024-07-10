import React from "react";
import { LiaTimesSolid } from "react-icons/lia";
import "./CartCardThree.css";

const CartCardThree = () => {
  return (
    <div className="cart-card-container">
      <LiaTimesSolid color="red" />
      <img src={require("../Assets/dinnerPlate.png")} alt="DinnerPlate" />
      <p>YEMOJA LUNCH PLATE </p>
      <p>#9,000,000</p>
      <div>
        <span>-</span>
        <span>1</span>
        <span>+</span>
      </div>
      <p>#9,000,000</p>
    </div>
  );
};

export default CartCardThree;
