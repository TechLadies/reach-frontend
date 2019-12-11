import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Login from "./components/Login";
import Dummy from "./components/Dummy";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import UpdateDb from "./components/UpdateDB";

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
          <Route path="/update_donor_database">
            <Navbar />
            <UpdateDb />
          </Route>
          <Route path="/">
            <Dashboard />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
