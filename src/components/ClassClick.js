//rce snippet
import React, { Component } from "react";

class ClassClick extends Component {
  clickHandler() {
    alert("hallo2");
  }
  render() {
    return (
      <div>
        rce to build
        <button onClick={this.clickHandler}>Btn Event Handler</button>
      </div>
    );
  }
}

export default ClassClick;
