import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './index.css';
import * as serviceWorker from './serviceWorker';

import Index from './Home';
import SignUp from './components/SignUp';
import Login from './components/Login';
import ListAllUsers from './components/ListAllUsers';

ReactDOM.render(
    <Router>
    <main>
        <nav className="main-nav">
            <ul className="list">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/signup/">Sign up</Link>
                </li>
                <li>
                    <Link to="/list-all-users/">List all users</Link>
                </li>
                <li>
                    <Link to="/login/">Login</Link>
                </li>
            </ul>
        </nav>

      <Route path="/" exact component={Index} />
      <Route path="/signup/" component={SignUp} />
      <Route path="/login/" component={Login} />
      <Route path="/list-all-users/" component={ListAllUsers} />
    </main>
  </Router>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
