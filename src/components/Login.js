import React, { useState } from 'react'
import Loginimage from '../images/Group 5.svg'
import Logo from '../images/Logo.svg'
import { useHistory, useParams, useLocation } from 'react-router-dom'

const initialState = {
  email: '',
  password: '',
  notify: '',
}

function Login(props) {
  const history = useHistory()
  if (localStorage.getItem('token')) {
    history.push('/')
  }

  const keyValue = useLocation().search
  const tokenParams = new URLSearchParams(keyValue)
  const resetPasswordToken = tokenParams.get('token')
  console.log(resetPasswordToken)

  const [state, setState] = useState(initialState)
  const resetPasswordMode = props.resetPasswordStatus

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
      notify: '',
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
        notify: 'Your email and password do not match. Please try again',
      })
    }
  }

  const handleLoginSubmit = (e) => {
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
        setState({ ...state, notify: 'Connection error, unable to login.' })
      })
  }

  const handleResetPwEmailSubmit = (e) => {
    e.preventDefault()
    fetch(`http://localhost:3001/users/reset_password_email`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: state.email,
      }),
    })
      .then((res) => {
        if (res.status === 200) {
          showMsg(res,setState)
        }
        if (res.status === 404) {
          showMsg(res,setState)
        }
        if (res.status === 500) {
          return setState({
            email: '',
            notify:
              'Server Error, please try again or contact your admin if problem persist',
          })
        }
      })
      .catch((err) => console.log(err))
  }

  const resetPassword = (e) => {
    e.preventDefault()
    fetch(`http://localhost:3001/users/reset_password`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        token: resetPasswordToken,
        password1: state.password1,
        password2: state.password2,
      }),
    }).then((res) => {
      if (!res.ok){
        showMsg(res,setState)
      }
      if(res.ok){
        showMsg(res,setState)
      }
    })
  }
  const activatedHandler = () => {
    if (resetPasswordToken) {
      return resetPassword
    }
    if (!resetPasswordToken && resetPasswordMode) {
      return handleResetPwEmailSubmit
    }
    if (!resetPasswordMode) {
      return handleLoginSubmit
    }
  }

  return (
    <div className="login-container">
      <img src={Loginimage} className="login-img" alt="Login" />
      <div className="login-form">
        <img src={Logo} className="logo" alt="Logo" />
        <form onSubmit={handleLoginSubmit}>
          <div className="login-form-list">
            <label htmlFor="email">
              {resetPasswordToken ? 'New Password' : null}
              {!resetPasswordToken && resetPasswordMode
                ? 'Please enter your email address'
                : null}
              {!resetPasswordMode ? 'Email Address' : null}
            </label>

            <input
              type={resetPasswordToken ? 'password' : 'text'}
              name={resetPasswordToken ? 'password1' : 'email'}
              placeholder={
                resetPasswordToken
                  ? 'Enter new password'
                  : ' Enter your email address'
              }
              value={resetPasswordToken ? state.password1 : state.email}
              onChange={handleChange}
              className="textbox"
            />
          </div>
          {resetPasswordMode && !resetPasswordToken ? null : (
            <div className="login-form-list">
              <label htmlFor="password">
                {' '}
                {resetPasswordToken ? 'Re-enter new password' : 'Password'}
              </label>

              <input
                type="password"
                name={resetPasswordToken ? 'password2' : 'password'}
                placeholder={
                  resetPasswordToken
                    ? 'Re-enter new password'
                    : 'Enter your password'
                }
                value={resetPasswordToken ? state.password2 : state.password}
                onChange={handleChange}
                className="textbox"
              />
            </div>
          )}
          {resetPasswordMode ? null : (
            <div className="login-form-list">
              <button
                onClick={() => history.push('/reset-password')}
                className="forgot-ps"
                type="button"
              >
                Forgot password?
              </button>
            </div>
          )}

          {state.notify ? <p className="error-msg">{state.notify}</p> : null}
          <button
            onClick={activatedHandler()}
            className="login-button"
            type="button"
          >
            <span className="login-button-text">
              {resetPasswordToken ? 'Reset password' : null}
              {!resetPasswordToken && resetPasswordMode
                ? 'Send reset password email'
                : null}
              {!resetPasswordMode ? 'Login' : null}
            </span>
          </button>
        </form>
      </div>
    </div>
  )
}

const showMsg = (res, setState) => res.json().then(msg => setState({notify: msg.message}))

export default Login
