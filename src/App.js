import React from 'react';
import "./App.css";
import Navbar from "./components/navbar";
import Login from "./components/Login";
import Dummy from "./components/Dummy";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import DonorList from "./components/DonorList/DonorList";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/dummy">
            <Dummy />
          </Route>
          <Route path="/" exact>
            <Navbar />
            <Dashboard />
          </Route>
          <Route path="/donorlist">
            <Navbar />
            <DonorList />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
