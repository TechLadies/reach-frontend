import React, { useState } from 'react';
// import $ from 'jquery';
// import 'bootstrap/dist/js/bootstrap.min.js';

const Dropdown = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleOpen = (e) => { 
    setIsVisible( !isVisible );
    e.preventDefault()
    e.stopPropagation()
    e.nativeEvent.stopImmediatePropagation()
    }
  document.addEventListener('click', () => {
    console.log('click')
    setIsVisible(false)
  })

  return (
    <>
    <a className="nav-link dropdown-toggle " onClick={toggleOpen} href="/" id="navbarDropdown" role="button" aria-haspopup="true" aria-expanded="false">
    Alvin Teo
  </a>
  <div className= {"dropdown-menu toggle dropdown-menu-right " + (isVisible ? 'show' : '') } aria-labelledby="navbarDropdown">
    <i className="fas fa-chevron-down"></i>
    <a className="dropdown-item" href="/">Log Out</a>
  </div>
  </>
  )
}


function Navbar(props) {
    return (
      <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: "#FFF3E2"}}>

     <span className="logo_navbar">
     <img src="/reach_logo.png" height="33" width="120" alt="text here" />
     </span>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <span className="search_icon">
        <img src="/search.svg" /> 
        </span>

        <form className="form mx-2 d-inline w-100" id="navBarSearchForm">
            <input className="form-control transparent-input" type="search" placeholder="Search Donor ID" aria-label="Search" />
          </form>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">Dashboard<span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Donors</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Update Donor Database</a>
            </li>
    
  
            <li className="nav-item dropdown">
            <Dropdown />
            </li>
          </ul>
         
        </div>
      </nav>
    )
  }
export default Navbar;