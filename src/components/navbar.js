import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

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
        <a className="dropdown-item" href="/">
          Log Out
        </a>
      </div>
    </>
  )
}

function Navbar(props) {
  const [search, setSearch] = useState('')

  const handleSearch = () => {
    fetch('https://reach-backend.herokuapp.com/donors/details', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ donorIdNo: search })
    }).then(res => {
      console.log(res)
      return res.json()
    }).then(data => {
      console.log(data)
    })
  }

  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ backgroundColor: '#FFF3E2' }}
    >
      <span className="logo_navbar">
        <img
          src="/reach_logo.png"
          height="30px"
          alt="Reach Community Services"
        />
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
        onSubmit={handleSearch()}
      >
        <input
          className="form-control transparent-input"
          type="search"
          placeholder="Search Donor ID"
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
export default Navbar
