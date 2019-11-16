import React, { Component } from 'react';
import logo from './logo.svg';
import Navbar2 from './components/navbar/navbar2.js';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';

function App() {
  return (
    <div className="App">
       <Navbar2 />
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
    </div>
  );
}

export default App;
