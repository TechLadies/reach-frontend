import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Loginimage from "../images/Group 5.svg";
import Logo from "../images/Logo.svg";

function ResetPassword() {
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [resetSuccess, setResetSuccess] = useState(true);
  const [notify, setNotify] = useState(null);

  const keyValue = useLocation().search;
  const tokenParams = new URLSearchParams(keyValue);
  const token = tokenParams.get("token");

  const handleSubmit = (e) => {
    e.preventDefault();
    setNotify(null);

    // check passwords
    if (password1.length < 8 || password2.length < 8) {
      return setNotify("Your password must be at least 8 characters.");
    }
    if (password1 !== password2) {
      return setNotify("Passwords entered do not match.");
    }

    // do fetch
    fetch(`${process.env.REACT_APP_API}/users/reset_password`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        token,
        password1,
        password2,
      }),
    }).then((res) => {
      if (!res.ok) {
        res.json().then((msg) => setNotify(msg.message));
      } else {
        setResetSuccess(true);
      }
    });
  };

  return (
    <div className="login-container">
      <img src={Loginimage} className="login-img" alt="Login" />
      <div className="login-form">
        <img src={Logo} className="logo" alt="Logo" />
        {resetSuccess ? (
          <>
            <div className="form-success-text">
              Your password has been reset!
            </div>
            <Link to="/login">
              <button className="login-button" type="submit">
                Return to Login
              </button>
            </Link>
          </>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="login-form-list">
              <label htmlFor="password1">New Password</label>
              <input
                type="password"
                name="password1"
                id="password1"
                value={password1}
                onChange={(e) => setPassword1(e.target.value)}
                className="textbox"
              />
            </div>
            <div className="login-form-list">
              <label htmlFor="password2">Confirm Password</label>
              <input
                type="password"
                name="password2"
                id="password2"
                value={password2}
                onChange={(e) => setPassword2(e.target.value)}
                className="textbox"
              />
            </div>

            {notify && <p className="error-msg">{notify}</p>}

            <button className="login-button" type="submit">
              Reset Password
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default ResetPassword;
