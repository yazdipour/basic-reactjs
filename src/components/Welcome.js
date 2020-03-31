// CLass Component
// Stateful
// UI + Logic

import React, { Component } from "react";

class Welcome extends Component {
  render() {
    const { name } = this.props; //Destructuring props
    return (
      <h1>
        Welcome {this.props.name} or {name}
      </h1>
    );
  }
}

export default Welcome;
