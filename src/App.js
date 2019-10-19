import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SignInSide from './SignInSide'
import SignUp from './SignUp'
import SimpleTabs from './dashboard'
import Signin from './signin'


function App() {
  return (
      <Router>
        <div>  
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/signin">
              <Signin />
            </Route>
          </Switch>
        </div>
      </Router>
    );
}

export default App;
