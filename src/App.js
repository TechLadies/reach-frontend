import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Login from "./components/Login";
import Dummy from "./components/Dummy";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Dashboard from "./components/Dashboard";

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
          <ProtectedRoute path="/">
            <Navbar />
            <Dashboard />
          </ProtectedRoute>
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
