import React from "react";
import "../styles/hero.scss";

const Hero = () => {
  return (
    <div className="hero-wrap flex between">
      <div className="quote-wrap">
        <h1>
          unique art <span> & point of sale</span>
        </h1>
        <button>Explore</button>
      </div>
      <div className="image-wrap flex col">
        <div className="image flex" data-num="01">
          <img src="./images/art-3.avif" alt="" />
        </div>
        <div className="image flex" data-num="02">
          <img src="./images/art-4.avif" alt="" />
        </div>
        <div className="image flex" data-num="03">
          <img src="./images/art-14.avif" alt="" />
        </div>
      </div>
      <div className="bg"></div>
    </div>
  );
};

export default Hero;
