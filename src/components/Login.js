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
    <div>
      <img src={Loginimage} className="login-img" alt="Login" />
      <ul className="login-form">
        <li className="login-form-list">
          <img src={Logo} className="logo" alt="Logo" />
        </li>
        <form onSubmit={handleSubmit} >
          <li>
            <label htmlFor="email">Email Address</label>
          </li>
          <li className="login-form-list">
            <input
              type="text"
              name="email"
              placeholder=" Enter your email address"
              value={state.email}
              onChange={handleChange}
              className="textbox"
            />
          </li>
          <li>
            <label htmlFor="password">Password</label>
          </li>
          <li className="login-form-list">
            <input
              type="text"
              name="password"
              placeholder=" Enter your password"
              value={state.password}
              onChange={handleChange}
              className="textbox"
            />
          </li>
          <li className="login-form-list">
            <Link to="#">Forget password?</Link>
          </li>
          {state.error && <p className="error-msg">{state.error}</p>}
          <button className="login-button">
            <span className="login-button-text">Login</span>
          </button>
        </form>


      </ul>
    </div>
  );
}

export default Login;
