import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Login from "./components/Login";
import Dummy from "./components/Dummy";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import DonorList from "./components/DonorList/DonorList";
import Donordetails from "./components/DonorDetails";
import UpdateDb from "./components/UpdateDB";
import DonorDetails from "./components/DonorDetails";


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
          <Route path="/update">
            <Navbar />
            <UpdateDb />
          </Route>
          <Route path="/details">
            <Navbar />
            <DonorDetails />
          </Route>
          <ProtectedRoute path="/" exact>
            <Navbar />
            <Dashboard />
          </ProtectedRoute>
          <Route path="/donorlist">
            <Navbar />
            <DonorList />
          </Route>
          <Route path="/donordetails">
            <Navbar />
            <Donordetails />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

function ProtectedRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={() => {
        if (!localStorage.getItem("token")) return <Redirect to="/login" />;
        return children;
      }}
    />
  );
}

export default App;
