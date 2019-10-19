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
import Profile from './profile'
import Dtable from './search'
import Messages from './messageBoard'
import Jobs from './jobs.js'
import Events from './events.js'


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
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/search">
              <Dtable />
            </Route>
            <Route path="/messageBoard">
              <Messages />
            </Route>
            <Route path="/jobs">
              <Jobs />
            </Route>
            <Route path="/events">
              <Events />
            </Route>
          </Switch>
        </div>
      </Router>
    );
}

export default App;
