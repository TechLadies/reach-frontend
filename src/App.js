import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Login from "./components/Login";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import history from "./lib/history"
import Dashboard from "./components/Dashboard";
import DonorList from "./components/DonorList/DonorList";
import Edit from "./components/DonorDetails/Edit";
import UpdateDb from "./components/UpdateDB";
import DonorDetails from "./components/DonorDetails";
import SearchResults from "./components/SearchResults";
import ResetPassword from "./components/ResetPassword";
 
function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/forgot-password">
            <Login resetPasswordMode />
          </Route>
          <Route path="/reset-password">
            <ResetPassword />
          </Route>
          <ProtectedRoute path="/update">
            <Navbar />
            <UpdateDb />
          </ProtectedRoute>
          <ProtectedRoute path="/details/:idNo">
            <Navbar />
            <DonorDetails/>
          </ProtectedRoute>
          <ProtectedRoute path="/search/:name">
            <Navbar />
            <SearchResults/>
          </ProtectedRoute>
          <ProtectedRoute path="/" exact>
            <Navbar />
            <Dashboard />
          </ProtectedRoute>
          <ProtectedRoute path="/donorlist">
            <Navbar />
            <DonorList />
          </ProtectedRoute>
          <ProtectedRoute path="/edit">
            <Navbar />
            <Edit />
          </ProtectedRoute>
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
