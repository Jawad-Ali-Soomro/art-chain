import React from "react";
import "../styles/footer.scss";
import {
  BiLogoDiscord,
  BiLogoInstagram,
  BiLogoTwitter,
  BiLogoYoutube,
} from "react-icons/bi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex main-footer flex">
      <div className="copy flex col">
        <img src="../public/logo.png" alt="" />
      </div>
      <div className="links flex col">
        <ul className="flex col">
          <li>Community Guidelines</li>
          <li>Help Center</li>
          <li>Terms Of Service</li>
          <li>Privacy Notice</li>
        </ul>
      </div>
      <div className="newsletter flex col">
        <div className="wrap flex">
          <input type="text" />
          <button>subscribe</button>
        </div>
      </div>
      <div className="icons flex">
        <Link className="icon" to={"/"}>
          <BiLogoInstagram />
        </Link>
        <Link className="icon" to={"/"}>
          <BiLogoDiscord />
        </Link>
        <Link className="icon" to={"/"}>
          <BiLogoTwitter />
        </Link>
        <Link className="icon" to={"/"}>
          <BiLogoYoutube />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
