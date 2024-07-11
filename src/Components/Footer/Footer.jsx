import React from "react";
import "./Footer.css";
import logo from "../Assets/Logo.png";
import { FaArrowRight } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="content">
        <div className="left_column">
          <div className="logo">
            <img src={logo} alt="Logo" />
            <p>Handcrafted</p>
          </div>
          <p>
            We supply you the best of ceramic craft work and design to suit your
            taste
          </p>
          <div className="btn">
            <p>
              GET STARTED
              <span>
                <FaArrowRight />
              </span>
            </p>
          </div>
        </div>
        <hr />

        <div className="right_column">
          <div className="column_one">
            <h3>ABOUT US</h3>
            <p>Vision</p>
            <p>Strength</p>
            <p>Awards</p>
            <p>Testimonials</p>
            <p>Privacy Policy</p>
          </div>
          <div className="column_two">
            <h3>PRODUCTS</h3>
            <p>Pottery</p>
            <p>Cutlery</p>
            <p>Spoon</p>
            <p>Flower Vase</p>
            <p>Hand-made products</p>
          </div>
          <div className="column_three">
            <h3>DEALINGS</h3>
            <p>Home Decorations</p>
            <p>Retail</p>
            <p>Wholesales</p>
            <p>Recycling</p>
            <p>Luxury</p>
          </div>
        </div>
        <hr />
      </div>
      <div className="horizontal-line"></div>

      <div className="copyright-text">
        <span>Copyright © 2024 Hand Craft </span>
        <span>All Rights Reserved </span>
        <span>Terms and Conditions</span>
        <span>Privacy Policy </span>
      </div>
    </div>
  );
};

export default Footer;
