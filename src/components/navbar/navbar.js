import React, { Component } from 'react';
export default class Navbar extends React.Component {
  render() {
      return (
        <React.Fragment>
        <header id="home">
           <nav id="nav-wrap">
              {/* <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
              <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a> */}
              <ul id="nav" className="nav">
                 <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                 <li><a className="smoothscroll" href="#dashboard">Dashboard</a></li>
                 <li><a className="smoothscroll" href="#donor">Donor</a></li>
                 <li><a className="smoothscroll" href="#updatedatabase">Update Database</a></li>
              </ul>
           </nav>

           <p className="scrolldown">
              <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
           </p>
  
        </header>
        </React.Fragment>
      );
    }
  }
