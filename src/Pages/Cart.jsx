import React from "react";
import "./Cart.css";
import CartCard from "../Components/CartCard/CartCard";
import CartCardThree from "../Components/CartCardThree/CartCardThree";
import CartCardTwo from "../Components/CartCartTwo/CartCardTwo";
import CartCardMobile from "../Components/CartCardMobile/CartCardMobile";
import Footer from "../Components/Footer/Footer";

import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <>
      <div className="cart-container">
        <p>Cart (3 Items)</p>
        <div className="table-header">
          <p>Delete</p>
          <p>PHOTO</p>
          <p>PRODUCT</p>
          <p>PRICES</p>
          <p>QUANTITY</p>
          <p>SUBTOTAL</p>
        </div>

        <div className="items">
          <CartCard />
          <CartCardTwo />
          <CartCardThree/>
        </div>

        <div className="items-mobile">
          <CartCardMobile />
          <CartCardMobile />
          <CartCardMobile />
        </div>

        <div className="buttons">
          <div className="coupon-btns">
            <input placeholder="Coupon Code" />
            <span>APPLY COUPON</span>
          </div>

          <Link className="Home" to={"/"}>
            <span>UPDATE CART</span>
          </Link>
        </div>

        <div className="cart-box">
          <h4>Cart totals</h4>
          <p>
            <span>Subtotal</span> <span>#9,225,000</span>
          </p>
          <p>
            <span>Cart totals </span> <span>#9,245,000</span>
          </p>
          <Link className="cart-btn" to={"/checkout"}>
            <span>PROCEED TO CHECKOUT</span>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
