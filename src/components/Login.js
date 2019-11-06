import React from "react";
import Loginimage from "C:/Users/Lu Theng/Desktop/Techladies bootcamp/Reach project/reach-frontend/src/images/Group 5.svg";
import Logo from "C:/Users/Lu Theng/Desktop/Techladies bootcamp/Reach project/reach-frontend/src/images/Logo.svg";


const Login = () =>
  <div>
    <img src={Loginimage} className="login-img" alt="Login" />
    <ul className="login-form">
      <form onSubmit>
        <li className=  "login-form-list">
          <img src={Logo} className="logo" alt="Logo" />
        </li>
        <li className=  "login-form-list"> Email Address<br className= "login-br"/>
          <input type="text" name="email" placeholder=" Enter your email address" className="textbox" />
        </li>
        <li className=  "login-form-list">Password <br className= "login-br"/>
          <input type="text" name="password" placeholder=" Enter your password" className="textbox" />
        </li>
        <li className=  "login-form-list">Forgot password? </li>
        <li className=  "login-form-list"><button className = "login-button"><span className= "login-button-text">Login</span></button> </li>
      </form>

    </ul>
  </div>



export default Login;


