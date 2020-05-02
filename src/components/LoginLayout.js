import React from "react";
import Loginimage from "../images/chat@2x.png";
import Logo from "../images/Logo.svg";

function LoginLayout({ children }) {
  return (
    <div className="login-container">
      <img src={Loginimage} className="login-img" alt="Login" />
      <div className="login-form">
        <img src={Logo} className="logo" alt="Logo" />
        {children}
      </div>
    </div>
  );
}

export default LoginLayout;
