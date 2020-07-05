import React, { Component } from "react";
import "./App.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Auth } from "./components/auth/Auth";
import Home from "./components/Home";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      logginActive: true,
      user: {},
    };
  }

  render() {
    return (
      <Router>
        <Route exact path="/login" component={Auth} />
        <Route exact path="/" component={Home} />
      </Router>
    );
  }
}
