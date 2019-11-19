import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import ChartDemo from './components/ChartDemo';
import ByIntent from './components/ByIntent';
import TwoHandsDonation from '../src/images/two-hands-donation.svg';
import { BrowserRouter, Route, Link , Switch} from 'react-router-dom';

function App() {
  return (

    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/chartdemo">
            <ChartDemo />
          </Route>
        </Switch>
      </BrowserRouter>
      <ByIntent className ="byintentchart"/>
      
    </div>

  );
}

export default App;
