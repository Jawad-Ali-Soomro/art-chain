import React, { useEffect, useState } from "react";
import "../styles/art.scss";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { base_art_url } from "../constants/base_url";
import { BiHeart, BiLogoFacebook, BiLogoGithub, BiLogoInstagram, BiLogoTwitter } from "react-icons/bi";

const Art = () => {
  const navigate = useNavigate()
  const [coming_data, set_data] = useState([]);
  const get_data = async () => {
    await axios
      .get(`${base_art_url}/get/arts`)
      .then((res) => set_data(res.data.data));
  };
  useEffect(() => {
    get_data();
  });
  return (
    <div className="main-art-page flex">
      <div className="flex col main-wrap">
        {coming_data == undefined ? (
          <h1>Loading ...</h1>
        ) : (
          coming_data.map((art) => {
            return (
              <div className="art-wrap flex col" key={art._id}>
                <div className="profile flex">
                  <img src={art?.owner?.avatar} alt="" />
                  <h2>{art?.owner?.username}</h2>
                  <div className="more-option flex">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
                <img src={art?.ipfs_hash} alt="" />
                <div className="options flex">
                  <BiHeart className="icon" />
                  <button onClick={() => navigate(`/art/${art._id}`)}>Buy</button>
                </div>
              </div>
            );
          })
        )}
      </div>
      <div className="copyright-text flex col">
        <div className="top flex col">
          <h1>NEWSLETTER</h1>
          <input type="text" />
          <button>Subscribe</button>
        </div>
        <div className="links">
          <img src="./logo.png" alt="" />
          <ul>
            <li>Community Guidelines</li>
            <li>Help Center</li>
            <li>Terms Of Service</li>
          </ul>
          <ul className="flex icons">
            <li>
              {" "}
              <Link className="text" to={"/"}>
                <BiLogoFacebook />
              </Link>
            </li>
            <li>
              <Link className="text" to={"/"}>
                <BiLogoTwitter />
              </Link>
            </li>
            <li>
              <Link className="text" to={"/"}>
                <BiLogoInstagram />
              </Link>
            </li>
            <li>
              <Link className="text" to={"/"}>
                <BiLogoGithub />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Art;
