import React, { useState, useEffect } from 'react'
import {Link, useHistory } from 'react-router-dom'
import LoginLayout from "./LoginLayout"

function Login(props) {
  const history = useHistory()
  if (localStorage.getItem('token')) {
    history.push('/')
  }

  const { resetPasswordMode } = props
  
  const initialState = {
    email: '',
    password: '',
  }
  const [state, setState] = useState(initialState)
  const [notify, setNotify] = useState(null)
  const [loading, setLoading] = useState(false)
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    })
  }

  const [resetEmailSent, setResetEmailSent] = useState(false)

  useEffect(()=> {
    setNotify(null)
  }, [resetPasswordMode])

  const validateLogin = (response) => {
    if (response.ok) {
      response.json().then((data) => {
        localStorage.setItem('token', data.token)
        history.push('/')
        setLoading(false)
      })
    } else {
      response.json().then((data) => console.log(data))
      setState( state => ({
        ...state,
        password: ''
      }))
      setLoading(false)
      setNotify('Your email and password do not match. Please try again')
    }
  }

  const doLogin = (e) => {
    fetch(`${process.env.REACT_APP_API}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: state.email,
        password: state.password,
      }),
    })
      .then(validateLogin)
      .catch((err) => {
        setNotify('Connection error, unable to login.')
      })
  }

  const doResetPassword = (e) => {
    fetch(`${process.env.REACT_APP_API}/users/reset_password_email`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: state.email,
      }),
    })
      .then((res) => {
        setLoading(false)
        if (res.status === 202) {
          setResetEmailSent(true)
        }
        if (res.status === 404) {
          res.json().then((msg) => setNotify(msg.message))
        }
        if (res.status === 500) {
          setNotify('Server Error, please try again or contact your admin if problem persist')
        }
      })
      .catch((err) => console.log(err))
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    resetPasswordMode ?  doResetPassword() : doLogin()
  }

  if (resetPasswordMode && resetEmailSent) {
    return (
      <LoginLayout>
        <div className="form-success-text">
          Email sent! Please check your inbox to reset your password.
        </div>
        <br />
        <Link to="/login">
          <button className="login-button" type="button">
            Back to Login
          </button>
        </Link>
      </LoginLayout>
    )
  }

  return (
    <LoginLayout>
      <form onSubmit={handleFormSubmit}>
        <div className="login-form-list">
          <label htmlFor="email">Email Address</label>
          <input
            type="text"
            name="email"
            placeholder="Enter your email address"
            value={state.email}
            onChange={handleChange}
            className="textbox"
          />
        </div>
        {
          !resetPasswordMode && (
            <div className="login-form-list">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={state.password}
                onChange={handleChange}
                className="textbox"
              />
            </div>
          )
        }
        
        {notify && <p className="error-msg">{notify}</p>}

        {!resetPasswordMode && (
          <Link to="/forgot-password"
            className="forgot-ps"
            type="button"
            onClick = {()=> setResetEmailSent(false)}
          >
            Forgot password?
          </Link>
        )}

        <button className="login-button" type="submit">
          { resetPasswordMode ? "Send reset password email ": "Login "}
         {loading ? <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> : null}
        </button>
      </form>
    </LoginLayout>
  )
}

export default Login
