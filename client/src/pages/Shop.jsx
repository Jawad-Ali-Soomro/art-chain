import React, { useState } from "react";
import { Helmet } from "react-helmet";
import "../styles/shop.scss";
import Header from "../components/Header";
import Explore from "../components/Explore";
import Footer from "../components/Footer";
import { BiFilter } from "react-icons/bi";

const Shop = () => {
  const [show_filters, set_show_filters] = useState(false);
  return (
    <div className="flex col">
      <Helmet>
        <title>E x p l o r e</title>
      </Helmet>
      <Header />
      <div className="top-wrap flex">
        <div className="left flex col">
          <h1>Explore</h1>
          <p>DISCOVER & COLLECT DIGITAL ART</p>
        </div>
        <div className="right flex between">
          <button className="flex" onClick={() => set_show_filters(true)}>
            Filter <BiFilter className="icon" />
          </button>
        </div>
      </div>
      <div
        className="filters"
        style={{ width: `${show_filters == true ? "100%" : "0px"}` }}
      >
        <div
          className="main-wrap flex col"
          style={{ width: `${show_filters == true ? "30%" : "0px"}` }}
        >
          <div className="closing-menu" onClick={() => set_show_filters(false)}>
            <div></div>
            <div></div>
          </div>
          <div className="price flex col">
            <p>Price</p>
            <div className="input-wrap">
              <input type="number" placeholder="ETH MIN" />
            </div>
            <div className="input-wrap">
              <input type="number" placeholder="ETH MAX" />
            </div>
          </div>
          <div className="media flex col">
            <p>MEDIA</p>
            <div className="input-wrap flex">
              <input type="checkbox" name="gif" id="gif" value="GIF" />
              <label htmlFor="gif">GIF</label>
            </div>
            <div className="input-wrap flex">
              <input type="checkbox" name="png" id="png" value="png" />
              <label htmlFor="png">PNG</label>
            </div>
            <div className="input-wrap flex">
              <input
                type="checkbox"
                name="interactive"
                id="interactive"
                value="interactive"
              />
              <label htmlFor="interactive">INTERACTIVE</label>
            </div>
            <div className="input-wrap flex">
              <input type="checkbox" name="video" id="video" value="video" />
              <label htmlFor="video">VIDEO</label>
            </div>
            <div className="input-wrap flex">
              <input type="checkbox" name="3d" id="3d" value="3d" />
              <label htmlFor="3d">3D</label>
            </div>
          </div>
          <div className="btns flex col">
            <button>Apply Filters</button>
            <button onClick={() => set_show_filters(false)}>Close Menu</button>
          </div>
        </div>
      </div>

      <Explore />
      <Footer />
    </div>
  );
};

export default Shop;
