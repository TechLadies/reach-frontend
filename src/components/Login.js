import React, { useState, useEffect } from 'react'
import Loginimage from '../images/Group 5.svg'
import Logo from '../images/Logo.svg'
import {Link, useHistory } from 'react-router-dom'

function Login(props) {
  const history = useHistory()
  if (localStorage.getItem('token')) {
    history.push('/')
  }

  const { resetPasswordMode } = props
  // const keyValue = useLocation().search
  // const tokenParams = new URLSearchParams(keyValue)
  // const resetPasswordToken = tokenParams.get('token')
  const initialState = {
    email: '',
    password: '',
    // passwordResetSuccess: false,
    // password1: '',
    // password2: '',
  }
  const [state, setState] = useState(initialState)
  const [notify, setNotify] = useState(null)
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
      })
    } else {
      response.json().then((data) => console.log(data))
      setState( state => ({
        ...state,
        password: ''
      }))
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
        if (res.status === 200) {
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

  const resetPassword = (e) => {
    // e.preventDefault()
    // fetch(`${process.env.REACT_APP_API}/users/reset_password`, {
    //   method: 'PUT',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({
    //     token: resetPasswordToken,
    //     password1: state.password1,
    //     password2: state.password2,
    //   }),
    // }).then((res) => {
    //   if (!res.ok) {
    //     showMsg(res, setState)
    //   }
    //   if (res.ok) {
    //     setState({ ...state, passwordResetSuccess: true })
    //   }
    // })
  }

  // const backToLogin = () => {
    // setState(initialState)
  //   history.push('/login')
  // }

  const activatedButtonHandler = () => {
    // if (!resetPasswordMode && !resetPasswordToken && !state.passwordResetSuccess) {
    //   return handleLoginSubmit
    // }
    // if (resetPasswordMode && !resetPasswordToken && !state.passwordResetSuccess) {
    //   return handleResetPwEmailSubmit
    // }
    // if (
    //   (resetPasswordMode && !resetPasswordToken && state.passwordResetSuccess) ||
    //   (resetPasswordMode && resetPasswordToken && state.passwordResetSuccess)
    // ) {
    //   return backToLogin
    // }
    // if (resetPasswordMode && resetPasswordToken && !state.passwordResetSuccess) {
    //   return resetPassword
    // }
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    resetPasswordMode ?  doResetPassword() : doLogin()
  }

  if (resetPasswordMode && resetEmailSent) {
    return (
      <div className="login-container">
        <img src={Loginimage} className="login-img" alt="Login" />
        <div className="login-form">
          <img src={Logo} className="logo" alt="Logo" />
          <h5>Email sent! Please check your inbox to reset your password.</h5>
          <br />
          <Link to="/login">
            <button className="login-button" type="button">
              Back to Login
            </button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="login-container">
      <img src={Loginimage} className="login-img" alt="Login" />
      <div className="login-form">
        <img src={Logo} className="logo" alt="Logo" />
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
            >
              Forgot password?
            </Link>
          )}

          <button className="login-button" type="submit">
            { resetPasswordMode ? "Send reset password email": "Login"}
          </button>
        </form>
      </div>
    </div>
  //   <div className="login-container">
  //     <img src={Loginimage} className="login-img" alt="Login" />
  //     <div className="login-form">
  //       <img src={Logo} className="logo" alt="Logo" />
  //       <form onSubmit={handleLoginSubmit}>
  //         {resetPasswordMode && resetPasswordToken && state.passwordResetSuccess ? (
  //           <ActionCompleteMsg msg="Your password has been reset!" />
  //         ) : (
  //           <div>
  //             <div className="login-form-list">
  //               <label htmlFor="email">
  //                 {resetPasswordToken ? 'New Password' : null}
  //                 {!resetPasswordToken && resetPasswordMode
  //                   ? 'Please enter your email address'
  //                   : null}
  //                 {!resetPasswordMode ? 'Email Address' : null}
  //               </label>

  //               <input
  //                 type={resetPasswordToken ? 'password' : 'text'}
  //                 name={resetPasswordToken ? 'password1' : 'email'}
  //                 placeholder={
  //                   resetPasswordToken
  //                     ? 'Enter new password'
  //                     : ' Enter your email address'
  //                 }
  //                 value={resetPasswordToken ? state.password1 : state.email}
  //                 onChange={handleChange}
  //                 className="textbox"
  //               />
  //             </div>
  //             {resetPasswordMode && !resetPasswordToken ? null : (
  //               <div className="login-form-list">
  //                 <label htmlFor="password">
  //                   {' '}
  //                   {resetPasswordToken ? 'Re-enter new password' : 'Password'}
  //                 </label>

  //                 <input
  //                   type="password"
  //                   name={resetPasswordToken ? 'password2' : 'password'}
  //                   placeholder={
  //                     resetPasswordToken
  //                       ? 'Re-enter new password'
  //                       : 'Enter your password'
  //                   }
  //                   value={resetPasswordToken ? state.password2 : state.password}
  //                   onChange={handleChange}
  //                   className="textbox"
  //                 />
  //               </div>
  //             )}
  //             {resetPasswordMode ? null : (
  //               <div className="login-form-list">
  //                 <button
  //                   onClick={() => history.push('/reset-password')}
  //                   className="forgot-ps"
  //                   type="button"
  //                 >
  //                   Forgot password?
  //                 </button>
  //               </div>
  //             )}
  //           </div>
  //         )}
  //         {state.notify ? <p className="error-msg">{state.notify}</p> : null}
  //         <button
  //           onClick={activatedButtonHandler()}
  //           className="login-button"
  //           type="button"
  //         >
  //           <span className="login-button-text">
  //             {!resetPasswordMode && !resetPasswordToken && !state.passwordResetSuccess
  //               ? 'Login'
  //               : null}
  //             {resetPasswordMode && !resetPasswordToken && !state.passwordResetSuccess
  //               ? 'Send reset password email'
  //               : null}
  //             {state.passwordResetSuccess 
  //               ? ' Back to Login'
  //               : null}
             
  //             {!state.passwordResetSuccess && resetPasswordMode && resetPasswordToken
  //               ? 'Reset password'
  //               : null}
  //           </span>
  //         </button>
  //       </form>
  //     </div>
  //   </div>
  )
}

const ActionCompleteMsg = ({ msg = '' }) => {
  return (
    <div>
      <h1 className="pw-reset-msg"> {msg}</h1>
    </div>
  )
}
export default Login
