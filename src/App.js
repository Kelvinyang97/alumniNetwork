import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Signin from './signin'
import Pricing from './dashboard'


function App() {
  return (
      <Router>
        <div>  
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route exact path="/">
              <Signin />
            </Route>
            <Route path="/signin">
              <Signin />
            </Route>
            <Route path="/dashboard">
              <Pricing />
            </Route>
          </Switch>
        </div>
      </Router>
    );
}

export default App;
