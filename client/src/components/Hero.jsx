import React from "react";
import "../styles/hero.scss";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate()
  return (
    <div className="hero-wrap flex between">
      <div className="quote-wrap">
        <h1>
          unique art <span> & point of sale</span>
        </h1>
        <button onClick={() => navigate('/shop')}>Explore</button>
      </div>
      <div className="image-wrap flex col">
        <img
          src="./collage.png"
        />
      </div>
    </div>
  );
};

export default Hero;
