import React, { useState } from "react";
import Loginimage from "../images/Group 5.svg";
import Logo from "../images/Logo.svg";
import { Link } from 'react-router-dom';


const initialState = {
  email: "",
  password: ""
};

function Login() {
  const [state, setState] = useState(initialState)
  const handleChange = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  };

  const validateLogin = response => {
    if (response.ok) {
      response.json()
        .then(data => console.log(data.token));
    } else {
      response.json()
        .then(data => console.log(data));
      setState({
        ...state,
        password: "",
        error: "Your email and password do not match. Please try again"
      });
    }
  }

  const handleSubmit = e => {
    e.preventDefault();
    fetch(
      "https://united-women-backend.herokuapp.com/login",
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          "username": state.email,
          "password": state.password
        })
      })
      .then(validateLogin)
      .catch(err=> {setState({...state, error: "Connection error, unable to login."})});
        
  }

  return (
    <div className="login-container">
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


            <div className="login-form-list"><Link to="#">Forgot password?</Link> </div>
          </div>
          {state.error && <p className="error-msg">{state.error}</p>}
          <button
            onClick={handleSubmit}
            className="login-button">
            <span className="login-button-text">Login</span>
          </button>
        </form>



      </div>
    </div>
  );
}

export default Login;
