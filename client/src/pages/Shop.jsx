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
      <div className="top-wrap
  padding-bottom: 20vh; flex">
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
          className="main-wrap flex"
          style={{ width: `${show_filters == true ? "50%" : "0px"}` }}
        >
          <div className="close-menu" onClick={() => set_show_filters(false)}>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>

      <Explore />
      <Footer />
    </div>
  );
};

export default Shop;
