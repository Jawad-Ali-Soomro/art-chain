import React from "react";
import "../styles/login.scss";
import { BiEnvelope, BiKey } from "react-icons/bi";

const Login = () => {
  return (
    <div className="flex login-wrap">
      <img src="./collage.png" alt="" />
      <div className="form-wrap flex col">
        <img src="./logo.png" alt="" className="logo" />
        <h1>sign in</h1>
        <div className="input-wrap flex">
          <BiEnvelope className="icon" />
          <input type="text" placeholder="Enter Email" />
        </div>
        <div className="input-wrap flex">
          <BiKey className="icon" />
          <input type="text" placeholder="Enter Password" />
        </div>
        <button className="login-btn">login</button>
        <p>Don't have an account?</p>
        <button className="btn-reg">register</button>
      </div>
    </div>
  );
};

export default Login;
