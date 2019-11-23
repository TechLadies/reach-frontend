import React, { Component } from 'react';
import logo from './logo.svg';
import Navbar from './components/navbar';
import './App.css';
import * as V from 'victory';
import Dashboard from './components/Dashboard';

function App() {
  return (

    <div className="App">
      <Navbar />
      <Dashboard /> 

    </div>

  );
}

export default App;
