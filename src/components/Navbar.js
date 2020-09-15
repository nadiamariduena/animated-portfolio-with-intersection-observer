import React, { Component } from "react";
import { Link, Router } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <React.Fragment>
        <header>
          <Link className="logo" to="/Home">
            <h3>LOGO</h3>
          </Link>
          <nav>
            <Link className="nav-links" to="/About">
              <li>About</li>
            </Link>
            <Link className="nav-links" to="/Portfolio">
              <li>Portfolio</li>
            </Link>
          </nav>
        </header>
      </React.Fragment>
    );
  }
}
