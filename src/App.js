import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Login from "./components/Login";
import Dummy from "./components/Dummy";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import history from "./lib/history"
import Dashboard from "./components/Dashboard";
import DonorList from "./components/DonorList/DonorList";
import Edit from "./components/DonorDetails/Edit";
import UpdateDb from "./components/UpdateDB";
import DonorDetails from "./components/DonorDetails";
import SearchResults from "./components/SearchResults";
 
function App() {
  
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/reset-password">
            <Login resetPasswordStatus= {true}/>
          </Route>
          <Route path="/dummy">
            <Dummy />
          </Route>
          <Route path="/update">
            <Navbar />
            <UpdateDb />
          </Route>
          <Route path="/details/:idNo">
            <Navbar />
            <DonorDetails/>
          </Route>
          <Route path="/search/:name">
            <Navbar />
            <SearchResults/>
          </Route>
          <ProtectedRoute path="/" exact>
            <Navbar />
            <Dashboard />
          </ProtectedRoute>
          <Route path="/donorlist">
            <Navbar />
            <DonorList />
          </Route>
          <Route path="/edit">
            <Navbar />
            <Edit />
          </Route>
        </Switch>
      </Router>
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
