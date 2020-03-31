import React, { Component } from "react";

class Message extends Component {
  constructor() {
    super(); //call Component constructor
    this.state = {
      counter: 0
    };
  }
  changeMessage() {
    // this.setState({ counter: this.state.counter + 1 }, () => {
    //   alert("This is a callback function after state change");
    // });
    // If call this code 5 times at a same time, it just do one +1.
    // If we want to fix it, we have to save previous state and +1 to that
    this.setState((prevState, props) => ({ counter: prevState.counter + 1 }));
  }
  render() {
    return (
      <div>
        <h1>Msg: Count {this.state.counter}</h1>
        <button onClick={() => this.changeMessage()}>click this</button>
      </div>
    );
  }
}

export default Message;
