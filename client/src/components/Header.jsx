import React from "react";
import "../styles/header.scss";
import {
  BiEnvelope,
  BiHeart,
  BiSearch,
  BiUser,
} from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate()
  return (
    <div className="header flex between">
      <div className="logo flex" onClick={() => navigate('/')}>
        <img src="../public/logo.png" alt="" />
      </div>
      <div className="navs flex">
      <div className="search-bar flex">
          <input type="text" />
          <BiSearch className="icon" />
        </div>
        <ul className="flex">
          <li className="flex">
            <BiEnvelope />
          </li>
          <li className="flex">
            <BiHeart />
          </li>
          <li className="flex account" onClick={() => navigate('/account')}>
            <BiUser />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
