import React from 'react';
import logo from './logo.svg';
import Report from './images/report.svg';
import Filterp from './images/filter_purplebtn.svg';
import Filterw from './images/filter_whitebtn.svg';
import './App.css';
import Login from './components/Login';
import Dummy from './components/Dummy';
import { BrowserRouter, Route, Link , Switch} from 'react-router-dom';

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
        </Switch>
      </BrowserRouter>
    
    </div>

  );
}

export default App;
