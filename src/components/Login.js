import React, { useState } from 'react'
import Loginimage from '../images/Group 5.svg'
import Logo from '../images/Logo.svg'
import {useHistory } from 'react-router-dom'

const initialState = {
  email: '',
  password: '',
}

function Login(props) {
  const history = useHistory()
  if (localStorage.getItem('token')) {
    history.push('/')
  }

  const [state, setState] = useState(initialState)
  const resetPasswordMode = props.resetPasswordStatus
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
      error: '',
    })
  }

  const validateLogin = (response) => {
    if (response.ok) {
      response.json().then((data) => {
        console.log(data.token)
        localStorage.setItem('token', data.token)
        history.push('/')
      })
    } else {
      response.json().then((data) => console.log(data))
      setState({
        ...state,
        password: '',
        error: 'Your email and password do not match. Please try again',
      })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
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
        setState({ ...state, error: 'Connection error, unable to login.' })
      })
  }

  return (
    <div className="login-container">
      <img src={Loginimage} className="login-img" alt="Login" />
      <div className="login-form">
        <img src={Logo} className="logo" alt="Logo" />
        <form onSubmit={handleSubmit}>
          <div className="login-form-list">
             <label htmlFor="email">{resetPasswordMode? "Please enter your email address": "Email Address"}</label>

            <input
              type="text"
              name="email"
              placeholder=" Enter your email address"
              value={state.email}
              onChange={handleChange}
              className="textbox"
            />
          </div>
          {resetPasswordMode ? null : (
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
            </div>
          )}
          {resetPasswordMode ? null: <div className="login-form-list">
            <button
              onClick={() => history.push('/reset-password')}
              className = "forgot-ps"
              type ="button"
            >
              Forgot password?
            </button>
          </div>}

          {state.error && <p className="error-msg">{state.error}</p>}
          <button onClick={handleSubmit} className="login-button" type= "button"> 
            <span className="login-button-text">{resetPasswordMode ? 'Send reset password email': 'Login'}</span>
          </button>
        </form>
      </div>
    </div>
  )
}


export default Login
