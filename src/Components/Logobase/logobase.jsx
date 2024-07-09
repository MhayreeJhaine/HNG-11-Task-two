import React from "react";
import "./logobase.css";
import H_and_M from "../Assets/h&m.png";
import obey from "../Assets/obey.png";
import shopify from "../Assets/shopify.png";
import lacoste from "../Assets/lacoste.png";
import levi from "../Assets/levi.png";
import amazon from "../Assets/amazon.png";

const Logobase = () => {
  return (
    <div className="logo-imgs">
      <img src={H_and_M} alt="" />
      <img src={obey} alt="" />
      <img src={shopify} alt="" />
      <img src={lacoste} alt="" />
      <img src={levi} alt="" />
      <img src={amazon} alt="" />
    </div>
  );
};

export default Logobase;
