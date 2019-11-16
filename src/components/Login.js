import React, { useState } from "react";
import Loginimage from "../images/Group 5.svg";
import Logo from "../images/Logo.svg";
import { Link } from 'react-router-dom';


const initialState = {
  name: "",
  email: ""
};


const formValid = formErrors => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  return valid;
};

function Login() {
  const [state, setState] = useState(initialState)
  const handleChange = e => {
    setState({
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (formValid(state)) {
      console.log(`
        --SUBMITTING--
        Email: ${state.email}
        Password: ${state.password}
      `);
    } else {
      setState({
        error: "Your email and password do not match. Please try again"
      });
    }
  }
  return (
    <div className = "login-container">
      <img src={Loginimage} className="login-img" alt="Login" />
      <div className="login-form">
        <img src={Logo} className="logo" alt="Logo" />
        <form onSubmit={handleSubmit} >
          <div className="login-form-list">
            <label htmlFor="email">Email Address</label>


            <input
              type="text"
              name="email"
              placeholder=" Enter your email address"
              value={state.email}
              onChange={handleChange}
              className="textbox"
            />
          </div>
          <div className="login-form-list">
            <label htmlFor="password">Password</label>


            <input
              type="password"
              name="password"
              placeholder=" Enter your password"
              value={state.password}
              onChange={handleChange}
              className="textbox"
            />


            <div className= "login-form-list"><Link to="#">Forgot password?</Link> </div>
          </div>
          {state.error && <p className="error-msg">{state.error}</p>}
          <button className="login-button">
            <span className="login-button-text">Login</span>
          </button>
        </form>



      </div>
    </div>
  );
}

export default Login;
