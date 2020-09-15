import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//
//
//
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/portfolio" exact component={Portfolio} />
          {/* ---------- */}
          <Route path={() => "/main" || "/admin" || "/*"} component={Home} />
        </Switch>
      </Router>
    );
  }
}
