import React, { Component } from 'react';
import logo from './logo.svg';
import Navbar from './components/navbar';
import './App.css';
import Login from './components/Login';
import { BrowserRouter, Route, Link , Switch} from 'react-router-dom';

function App() {
  return (

    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>

  );
}

export default App;
