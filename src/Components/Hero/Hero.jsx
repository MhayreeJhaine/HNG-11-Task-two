import React from "react";
import "./Hero.css";
import hero_image from "../Assets/woman-picture-removebg-preview.png";

const Hero = () => {
  return (
    <div className="hero-section">
      <section className="hero">
        <div className="left">
          <div className="text">
            <h2>
              <span className="text-one">
                <span className="one">LET'S</span>
              </span>

              <span className="text-two">EXPLORE</span>
              <span className=" text-three">
                <span className="three"> UNIQUE</span>
              </span>
              <span className="text-four">CRAFTS</span>
            </h2>
          </div>
          <div className="paragraph">
            <p>Elevate Your Space with Artifacts</p>
          </div>
          <div className="left_button">
            <button>SHOP NOW</button>
          </div>
        </div>
        <div className="right">
          <img src={hero_image} alt="" />
        </div>
      </section>
    </div>
  );
};

export default Hero;
