import React, { Component } from "react";

import HomeContent from "./HomeContent";
//
//

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <HomeContent />
        <h1>home</h1>
      </React.Fragment>
    );
  }
}

export default Home;
