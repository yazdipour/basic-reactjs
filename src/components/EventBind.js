import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "hello"
    };

    this.clickHandler2 = this.clickHandler2.bind(this);
  }
  clickHandler() {
    this.setState({ message: "bye" });

    //'this' keyword is undefined because this used with a function returns 'window' object
    // on the browser and 'global' object inside nodejs environment.
    // Since 'react strict mode' is enabled, it is returning 'undefined'.
  }
  clickHandler2() {
    this.setState({ message: "bind once" });
  }
  clickHandler3 = () => {
    this.setState({ message: "class prop as arrow func" });
  };
  render() {
    return (
      <div>
        {this.state.message}
        <button onClick={this.clickHandler}>
          1. this.clickHandler - `this`==undefined
        </button>
        <button onClick={this.clickHandler.bind(this)}>
          2. NOT GOOD -this.clickHandler.bind(this)
        </button>
        <button onClick={() => this.clickHandler()}>
          3. EZ () => this.clickHandler()
        </button>
        <button onClick={() => this.clickHandler2()}>
          4. Better option - binding in constructor
        </button>
        <button onClick={this.clickHandler3}>5. class prop</button>
      </div>
    );
  }
}

export default EventBind;
