import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Login from "./components/Login";
import Dummy from "./components/Dummy";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
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
<<<<<<< HEAD
          <ProtectedRoute path="/">
            <Navbar />
            <Dashboard />
          </ProtectedRoute>
=======
          <Route path="/" exact>
            <Navbar />
            <Dashboard />
          </Route>
          <Route path="/donorlist">
            <Navbar />
            <DonorList />
          </Route>
>>>>>>> edd875b2ec98987262a33ffe0c9967a00aa74622
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
