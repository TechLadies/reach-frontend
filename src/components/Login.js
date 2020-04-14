import React, { useState } from 'react'
import Loginimage from '../images/Group 5.svg'
import Logo from '../images/Logo.svg'
import {useHistory } from 'react-router-dom'

const initialState = {
  email: '',
  password: '',
  notify: ''
}

function Login(props) {
  const history = useHistory()
  if (localStorage.getItem('token')) {
    history.push('/')
  }

  const [state, setState] = useState(initialState)
  const resetPasswordMode = props.resetPasswordStatus
  const [resultMessage, setResultMessage] = useState({})

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

  const handleResetPwSubmit = (e) => {
    e.preventDefault()
    fetch(`http://localhost:3001/users/reset_password_email`,{
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: state.email
      })
    }).then(res=>{
      if (res.status === 200){
        res.json().then(msg=> setState({email: '', notify: msg.message}))
      }
      if (res.status === 404){
        res.json().then(msg=> setState({email: '', notify: msg.message}))
      }
      if (res.status === 500){
        return setState({email: '', notify: 'Server Error, please try again or contact your admin if problem persist'})
      }
    }).catch(err=> console.log(err))
  }

  return (
    <div className="login-container">
      <img src={Loginimage} className="login-img" alt="Login" />
      <div className="login-form">
        <img src={Logo} className="logo" alt="Logo" />
        <form onSubmit={handleLoginSubmit}>
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

          {state.notify && <p className="error-msg">{state.notify}</p>}
          <button onClick={resetPasswordMode? handleResetPwSubmit : handleLoginSubmit} className="login-button" type= "button"> 
            <span className="login-button-text">{resetPasswordMode ? 'Send reset password email': 'Login'}</span>
          </button>
        </form>
      </div>
    </div>
  )
}


export default Login
