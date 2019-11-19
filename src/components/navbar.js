import React from 'react';

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: "#FFF3E2"}}>

     <span class="logo_navbar">
     <img src="/reach_logo.png" height="33" width="120" alt="text here" />
     </span>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <span class="search_icon">
        <img src="/search.svg" /> 
        </span>

        <form className="form-inline mx-2 my-auto d-inline w-100" id="navBarSearchForm">
            <input className="form-control transparent-input" type="search" placeholder="Search Donor ID Number" aria-label="Search" />
          </form>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">Dashboards<span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Donors</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Update Donor Database</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Alvin Teo
              </a>
              <div className="dropdown-menu show" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="/">Action</a>
                <a className="dropdown-item" href="/">Another action</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="/">Something else here</a>
              </div>
            </li>
          </ul>
         
        </div>
      </nav>
    )
  }
}

export default Navbar;