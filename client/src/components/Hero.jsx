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
          src="https://pixura.imgix.net/https%3A%2F%2Fstorage.googleapis.com%2Fsr_prod_artworks_bucket%2F0xb932a70a57673d89f4acffbe830e8ed7f75fb9e0%252F44344%252Fsf9xa?ixlib=js-3.8.0&w=550&h=550&fit=crop&q=75&auto=format%2Ccompress&s=c3006d31b28fb67bd6e774a2a7fa0abc"
          alt="hero image                                           "
        />
      </div>
    </div>
  );
};

export default Hero;
