import React, { useState } from "react";
import "./Navbar.css";

import logo from "../Assets/Logo.png";
import search_icon from "../Assets/search.png";
import cart_icon from "../Assets/cart.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState("");

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="Logo" />
        <p>Handcrafted</p>
      </div>
      <ul className="nav-menu">
        <li onClick={() => setMenu("home")}>
          <Link style={{ textDecoration: "none", color: "#000" }} to="/">
            HOME
          </Link>
          {menu === "home" ? <></> : <></>}{" "}
        </li>
        <li onClick={() => setMenu("shop")}>
          <Link style={{ textDecoration: "none", color: "#000" }} to="/">
            SHOP
          </Link>
          {menu === "shop" ? <></> : <></>}{" "}
        </li>
        <li onClick={() => setMenu("about")}>
          <Link style={{ textDecoration: "none", color: "#000" }} to="/">
            ABOUT
          </Link>
          {menu === "about" ? <></> : <></>}{" "}
        </li>
        <li onClick={() => setMenu("deals")}>
          <Link style={{ textDecoration: "none", color: "#000" }} to="/">
            DEALS
          </Link>
          {menu === "deals" ? <></> : <></>}{" "}
        </li>
      </ul>
      <div className="nav-signup-cart">
        <button>SIGN UP</button>
        <img src={search_icon} alt="Search" />
        <Link style={{ textDecoration: "none", color: "#000" }} to="/cart">
          <img src={cart_icon} alt="Cart" />
        </Link>
        <div className="cart-count">3</div>
      </div>
    </div>
  );
};

export default Navbar;
