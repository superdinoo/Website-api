import React from "react";
import "./SignUp.css";
import Crypto from "../assets/trade.png";

const SignUp = () => {
  return (
    <div className="signUp">
      <div className="container">
        <div className="left">
          <img src={Crypto} alt="" />
        </div>

        <div className="right">
          <h2>Earn passive income width crypto</h2>
          <p>Earn up to 12%</p>
          <div className="input-container">
            <input type="email" placeholder="Enter your email" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
