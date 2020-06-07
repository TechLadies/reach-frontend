import React, { useState } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import LoginLayout from "./LoginLayout";

function ResetPassword() {
  const history = useHistory()
  const keyValue = useLocation().search;
  const tokenParams = new URLSearchParams(keyValue);
  const token = tokenParams.get("token");

  if (localStorage.getItem('token') || !token) {
    history.push('/')
  }

  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [resetSuccess, setResetSuccess] = useState(false);
  const [notify, setNotify] = useState(null);
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    setNotify(null);
    setLoading(true)
    // check passwords
    if (password1.length < 8 || password2.length < 8) {
      setLoading(false)
      return setNotify("Your password must be at least 8 characters.");
    }
    if (password1 !== password2) {
      setLoading(false)
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
      setLoading(false)
      if (!res.ok) {
        res.json().then((msg) => setNotify(msg.message));
      } else {
        setResetSuccess(true);
      }
    });
  };

  return (
    <LoginLayout>
      {resetSuccess ? (
        <>
          <div className="form-success-text">Your password has been reset!</div>
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

          <div className="form-hint">
            Your password must be at least 8 characters and include at least 1
            letter and 1 number.
          </div>

          <button className="login-button" type="submit">
            Reset Password 
            {loading ? <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> : null}
          </button>
        </form>
      )}
    </LoginLayout>
  );
}

export default ResetPassword;
