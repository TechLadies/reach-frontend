import React from "react";
import Loginimage from "C:/Users/Lu Theng/Desktop/Techladies bootcamp/Reach project/reach-frontend/src/images/Group 5.svg";
import Logo from "C:/Users/Lu Theng/Desktop/Techladies bootcamp/Reach project/reach-frontend/src/images/Logo.svg";
import { Link } from 'react-router-dom';

const formValid =  formErrors => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  return valid;
}

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      formErrors: {
        email: "",
        password: ""
      }
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (formValid(this.state)) {
      console.log(`
        --SUBMITTING--
        Email: ${this.state.email}
        Password: ${this.state.password}
      `);
    } else {this.setState({
      error: "Your email and password do not match. Please try again"
  });
    }
  }

  render() {
    console.log(this.state);
    const { email, password } = this.state;
    return (
      <div>
        <img src={Loginimage} className="login-img" alt="Login" />
        <ul className="login-form">
          <li className=  "login-form-list">
            <img src={Logo} className="logo" alt="Logo" />
          </li>
          <form onSubmit={this.handleSubmit} >
            <li>
              <label htmlFor="email">Email Address</label>
            </li>
            <li className=  "login-form-list">
              <input
                type="text"
                name="email"
                placeholder=" Enter your email address"
                value={email}
                onChange={this.handleChange}
                className="textbox"
              />
            </li>
            <li > 
              <label htmlFor="password">Password</label>
            </li>
            <li className=  "login-form-list">
              <input
                type="text"
                name="password"
                placeholder=" Enter your password"
                value={password}
                onChange={this.handleChange}
                className="textbox"
              />
            </li>
            <li className=  "login-form-list">
              <Link to="#">Forget password?</Link>
            </li>
            {this.state.error && <p className= "error-msg">{this.state.error}</p>}
            <button className="login-button">
              <span className="login-button-text">Login</span>
            </button>
          </form>
         

        </ul>
      </div>
    );
  }
}

export default Login;

/*
const Login = () => (
  <div>
    <img src={Loginimage} className="login-img" alt="Login" />
    <ul className="login-form">
      <form onSubmit>
        <li className=  "login-form-list">
          <img src={Logo} className="logo" alt="Logo" />
        </li>
        <li className=  "login-form-list"> Email Address<br className= "login-br"/>
          <input type="text" name="email" placeholder=" Enter your email address" className="textbox" />
        </li>
        <li className=  "login-form-list">Password <br className= "login-br"/>
          <input type="text" name="password" placeholder=" Enter your password" className="textbox" />
        </li>
        <li className=  "login-form-list">Forgot password? </li>
        <li className=  "login-form-list"><button className = "login-button"><span className= "login-button-text">Login</span></button> </li>
      </form>

    </ul>
  </div>
);
 */
