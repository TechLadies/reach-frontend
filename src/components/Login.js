import React, { useState } from 'react'
import Loginimage from '../images/Group 5.svg'
import Logo from '../images/Logo.svg'
import { useHistory, useLocation } from 'react-router-dom'

function Login(props) {
  const history = useHistory()
  if (localStorage.getItem('token')) {
    history.push('/')
  }

  const resetPasswordMode = props.resetPasswordStatus
  const keyValue = useLocation().search
  const tokenParams = new URLSearchParams(keyValue)
  const resetPasswordToken = tokenParams.get('token')
  const initialState = {
    email: '',
    password: '',
    notify: '',
    passwordResetSuccess: false,
    password1: '',
    password2: '',
  }
  const [state, setState] = useState(initialState)
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    })
  }

  const validateLogin = (response) => {
    if (response.ok) {
      response.json().then((data) => {
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
    fetch(`${process.env.REACT_APP_API}/users/reset_password_email`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: state.email,
      }),
    })
      .then((res) => {
        if (res.status === 200) {
          res
            .json()
            .then((msg) =>
              setState({ notify: msg.message, passwordResetSuccess: true })
            )
        }
        if (res.status === 404) {
          showMsg(res, setState)
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
    fetch(`${process.env.REACT_APP_API}/users/reset_password`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        token: resetPasswordToken,
        password1: state.password1,
        password2: state.password2,
      }),
    }).then((res) => {
      if (!res.ok) {
        showMsg(res, setState)
      }
      if (res.ok) {
        setState({ ...state, passwordResetSuccess: true })
      }
    })
  }

  const backToLogin = () => {
    setState(initialState)
    history.push('/login')
  }

  const activatedButtonHandler = () => {
    if (!resetPasswordMode && !resetPasswordToken && !state.passwordResetSuccess) {
      return handleLoginSubmit
    }
    if (resetPasswordMode && !resetPasswordToken && !state.passwordResetSuccess) {
      return handleResetPwEmailSubmit
    }
    if (
      (resetPasswordMode && !resetPasswordToken && state.passwordResetSuccess) ||
      (resetPasswordMode && resetPasswordToken && state.passwordResetSuccess)
    ) {
      return backToLogin
    }
    if (resetPasswordMode && resetPasswordToken && !state.passwordResetSuccess) {
      return resetPassword
    }
  }

  return (
    <div className="login-container">
      <img src={Loginimage} className="login-img" alt="Login" />
      <div className="login-form">
        <img src={Logo} className="logo" alt="Logo" />
        <form onSubmit={handleLoginSubmit}>
          {resetPasswordMode && resetPasswordToken && state.passwordResetSuccess ? (
            <ActionCompleteMsg msg="Your password has been reset!" />
          ) : (
            <div>
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
            </div>
          )}
          {state.notify ? <p className="error-msg">{state.notify}</p> : null}
          <button
            onClick={activatedButtonHandler()}
            className="login-button"
            type="button"
          >
            <span className="login-button-text">
              {!resetPasswordMode && !resetPasswordToken && !state.passwordResetSuccess
                ? 'Login'
                : null}
              {resetPasswordMode && !resetPasswordToken && !state.passwordResetSuccess
                ? 'Send reset password email'
                : null}
              {state.passwordResetSuccess 
                ? ' Back to Login'
                : null}
             
              {!state.passwordResetSuccess && resetPasswordMode && resetPasswordToken
                ? 'Reset password'
                : null}
            </span>
          </button>
        </form>
      </div>
    </div>
  )
}

const showMsg = (res, setState) =>
  res.json().then((msg) => setState({ notify: msg.message }))

const ActionCompleteMsg = ({ msg = '' }) => {
  return (
    <div>
      <h1 className="pw-reset-msg"> {msg}</h1>
    </div>
  )
}
export default Login
