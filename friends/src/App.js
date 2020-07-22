import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Components/Login";
import FriendsList from "./Components/FriendsList";
import './App.css';
import PrivateRoute from "./Components/PrivateRoute";

function App() {
  
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />{" "}
        <PrivateRoute exact path="/protected" component={FriendsList} />
      </Switch>
    </Router>
  );
}

export default App;
