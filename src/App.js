import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//
//
//
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Navbar from "./components/Navbar";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/porfolio" exact component={Portfolio} />
          <Route path="/about" exact component={About} />
          <Route path="/*" exact component={Home} />
        </Switch>
      </Router>
    );
  }
}
