import React, { useState } from 'react'
import { NavLink, useHistory} from 'react-router-dom'
import logout from "../lib/logout"
// import Login from "./components/Login";
import { Redirect } from "react-router";

const Dropdown = () => {
  const [isVisible, setIsVisible] = useState(false)
  const toggleOpen = e => {
    setIsVisible(!isVisible)
    e.preventDefault()
    e.stopPropagation()
    e.nativeEvent.stopImmediatePropagation()
  }
  document.addEventListener('click', () => {
    console.log('click')
    setIsVisible(false)
  })

  const history = useHistory();
  return (
    <>
      <a
        className="nav-link dropdown-toggle "
        onClick={toggleOpen}
        href="/"
        id="navbarDropdown"
        role="button"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Alvin Teo
      </a>
      <div
        className={
          'dropdown-menu toggle dropdown-menu-right ' +
          (isVisible ? 'show' : '')
        }
        aria-labelledby="navbarDropdown"
      >
        <i className="fas fa-chevron-down"></i>
        <a className="dropdown-item" href="/" 
           onClick= {() =>{ history.push("/"); console.log(history); }}>
           {/* onClick={() => handleLogoutClick(() => (<Redirect to="/login" />))}> */}
      
          Log Out 
        </a>
      </div>
    </>
  )
}

function Navbar(props) {
  const [search, setSearch] = useState("")
  const history = useHistory()
  const handleSearch = (e) => {
    if (search.length > 0) {
    history.push({
      pathname: '/search/' + search
    }) } else return e.preventDefault()
  }

  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ backgroundColor: '#FFF3E2' }}
    >
      <span className="logo_navbar">
        <NavLink to="/">
          <img
            src="/reach_logo.png"
            height="30px"
            alt="Reach Community Services"
          />
        </NavLink>
      </span>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <span className="search_icon">
        <img src="/search.svg" />
      </span>

      <form
        className="form mx-2 d-inline w-100"
        id="navBarSearchForm"
        onSubmit={handleSearch}
      >
        <input
          className="transparent-input"
          type="search"
          placeholder="Search Donor name"
          aria-label="Search"
          onChange={e => setSearch(e.target.value)}
          value={search}
        />
       
      </form>
    

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/" exact>
              Dashboard<span className="sr-only">(current)</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/donorList">
              Donors
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/update">
              Update Donor Database
            </NavLink>
          </li>

          <li className="nav-item dropdown">
            <Dropdown />
          </li>
        </ul>
      </div>
    </nav>
  )
}

// function logOut() {
//   const initialState  = isLoggedIn
//   const [state ,setState] = setState(initialState);


//   function handleLogoutClick(e) {
//     e.preventDefault()
//       handlelogout((error) =>{
//         sessionStorage.clear();
//         this.setState({loggedIn: false});
//         history.push("/login");
//         console.log("Logout successful");
         
//      });
  
//      return (
//       {
//         // this.setState.LoggedIn &&
//         <Redirect to="/login" />
//        }
//     );
//     }
  
//   // async function handleLogout() {
//   //   // sessionStorage.clear();
//   //   this.setState({loggedIn: false};
//   //   history.push("/login");
//   // }
  
// }


export default Navbar
