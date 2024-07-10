import React from "react";
import "./Checkout.css";
import { FaArrowRight } from "react-icons/fa";
import { FaPaypal } from "react-icons/fa";
import Visa from "../Components/Assets/visa.png";
import mastercard from "../Components/Assets/mastercard.png";
import { Link } from "react-router-dom";

const Checkout = () => {
  return (
    <div className="checkout-container">
      <div>
        <h2>Billing Details</h2>
        <div className="input-container">
          <div className="input">
            <label>First Name *</label>
            <input placeholder="John" />
          </div>

          <div className="input">
            <label>Surname *</label>
            <input placeholder="Doe" />
          </div>
        </div>

        <div className="input-container">
          <div className="input">
            <label>Company</label>
            <input placeholder="Handcrafted" />
          </div>

          <div className="input">
            <label>Country / Region *</label>
            <select>
              <option>Nigeria</option>
            </select>
          </div>
        </div>

        <div className="input-container">
          <div className="input">
            <label>Street Address *</label>
            <input placeholder="Surulere" />
          </div>
        </div>

        <div className="input-container">
          <div className="input">
            <label>Town / City *</label>
            <input placeholder="Lagos" />
          </div>

          <div className="input">
            <label>State *</label>
            <select>
              <option>Lagos State</option>
            </select>
          </div>
        </div>

        <div className="input-container">
          <div className="input">
            <label>Zip *</label>
            <input placeholder="12345" />
          </div>

          <div className="input">
            <label>Phone *</label>
            <input placeholder="09047383728" />
          </div>
        </div>

        <div className="input-container">
          <div className="input">
            <label>Email *</label>
            <input placeholder="johndoe@email.com" />
          </div>
        </div>

        <div className="input-container">
          <div className="input">
            <label>Order Notes</label>
            <textarea placeholder="Write your notes here..." rows={5} />
          </div>
        </div>

        <div className="checkout-links">
          <Link to={"/cart"}>{"<"} RETURN TO CART</Link>
          <Link to={"/"}>
            CONTINUE TO SHIPPING <span> {<FaArrowRight />}</span>
          </Link>
        </div>
      </div>
      <div>
        <h2>
          <span>Product</span>
          <span>Subtotal</span>
        </h2>

        <hr />

        <div className="total">
          <div>
            <p>
              <span>Lalude Dinner Plate</span>
              <span>#55,000</span>
            </p>
            <p>
              <span>Lalude Dinner Plate</span>
              <span>#55,000</span>
            </p>
            <p>
              <span>Lalude Dinner Plate</span>
              <span>#55,000</span>
            </p>
          </div>

          <div>
            <p>
              <span>Subtotal</span>
              <span>#9,225,000</span>
            </p>
            <p>
              <span>Shipping</span>
              <span>#9,000</span>
            </p>
          </div>
        </div>

        <hr />

        <h3>
          <span>Total</span>
          <span>#9,245,000</span>
        </h3>

        <div className="payment-container">
          <h4>Payment</h4>

          <div>
            <p>
              <span>
                <input type="radio" />
                <span>Credit card</span>
              </span>

              <span className="credit-card-images">
                <img src={Visa} alt="" />
                <img src={mastercard} alt="" />
              </span>
            </p>

            <hr />

            <div className="input-container">
              <div className="input">
                <input placeholder="Card Number" />
              </div>
            </div>

            <div className="input-container">
              <div className="input">
                <input placeholder="Name on card" />
              </div>
            </div>

            <div className="input-container">
              <div className="input">
                <input placeholder="Expiration date MM/YY" />
              </div>

              <div className="input">
                <input placeholder="Security code" />
              </div>
            </div>

            <hr />
            <div>
              <p>
                <span>
                  <input type="radio" />
                  <span className="paypal-logo">
                    <FaPaypal />
                  </span>
                  <span>PayPal</span>
                </span>
              </p>
            </div>
          </div>

          <span className="place-order-btn">PLACE ORDER</span>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
