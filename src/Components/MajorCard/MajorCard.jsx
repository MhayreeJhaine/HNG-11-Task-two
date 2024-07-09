import React from "react";
import "./MajorCard.css";
import clay_pot from "../Assets/clayPot.png";
import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import { IoMdHeartEmpty } from "react-icons/io";
import ColorComponent from "../colorComponent/ColorComponent";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";

const colors = [
  "#C88242",
  "#FFFFFF",
  "#A1B8BE",
  "#212F39",
  "#DCB9A8",
  "#D67D91",
];

const MajorCard = () => {
  return (
    <section className="major-section">
      <div className="major">
        <div className="left-card">
          <img src={clay_pot} alt="" />
        </div>
        <div className="right-card">
          <h3>LARUBAWA CLAY RESERVOIR</h3>
          <div className="ratings">
            <p className="star">
              <span className="icon">
                <FaStar />
              </span>
              <span className="icon">
                <FaStar />
              </span>
              <span className="icon">
                <FaStar />
              </span>
              <span className="icon">
                <FaStar />
              </span>
              <span className="icon">
                <FaRegStar />
              </span>
            </p>
            <p>(1256 Reviews)</p>
            <p>
              Stock: <span className="color">In stock</span>
            </p>
          </div>
          <p className="price">
            #99,500 <span> #105,000</span>
          </p>
          <div className="color">
            <p>
              Color : <b> Clay</b>
            </p>

            <div className="colorBoxes">
              {colors.map((color, index) => {
                return (
                  <ColorComponent color={color} index={index} key={index} />
                );
              })}
            </div>
          </div>
          <div className="add-section">
            <div className="line-one">
              <button>
                <span>-</span>
                <span>1</span>
                <span>+</span>
              </button>
              <button>ADD TO CART</button>
            </div>
            <div className="line-two">
              <button>BUY NOW</button>
              <button>
                <IoMdHeartEmpty />
              </button>
            </div>
          </div>
          <div className="socials">
            <p>Share this:</p>
            <div className="icons">
              <span>
                <FaFacebookF />
              </span>
              <span>
                <FaTwitter />
              </span>
              <span>
                <AiFillInstagram />
              </span>
              <span>
                <FaLinkedinIn />
              </span>
            </div>
          </div>

          <div className="info">
            <hr />
            <p>
              <span>Details</span>
              <span>
                <IoMdAdd />
              </span>
            </p>
            <hr />
            <p>
              <span>Dimensions</span>
              <span>
                <IoMdAdd />
              </span>
            </p>
            <hr />
            <p>
              <span>Reviews</span>
              <span>
                <IoMdAdd />
              </span>
            </p>
            <hr />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MajorCard;
