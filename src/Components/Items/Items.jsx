import React from "react";
import "./Items.css";

const Items = (props) => {
  return (
    <div className="item">
      <img src={props.image} alt="" />
      <p>{props.name}</p>
      <p>{props.price}</p>
      <p className="Description">{props.description}</p>

      <div className="buttons">
        <p>ADD TO CART</p>
      </div>
    </div>
  );
};

export default Items;
