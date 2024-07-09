import React from "react";
import "./ColorComponent.css";

const ColorComponent = ({ color, index }) => {
  return (
    <div
      className="colorBox"
      style={
        index === 0
          ? {
              width: 25,
              height: 25,
              background: color,
            }
          : { background: color }
      }
    ></div>
  );
};

export default ColorComponent;
