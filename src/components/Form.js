import React, { Component } from "react";

export class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      comments: "",
      topic: "react"
    };
  }

  handleUsernameChange = event => {
    this.setState({
      username: event.target.value
    });
  };
  handleCommentsChange = event => {
    this.setState({
      comments: event.target.value
    });
  };
  handleTargetChange = event => {
    this.setState({
      topic: event.target.value
    });
  };
  handleSubmit = event => {
    alert(`${this.state.username}/${this.state.comments}/${this.state.topic}`);
    event.preventDefault();
  };
  render() {
    const { username, comments, topic } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          hint="Username"
          value={username}
          onChange={this.handleUsernameChange}
        />
        <textarea value={comments} onChange={this.handleCommentsChange} />
        <select value={topic} onChange={this.handleTargetChange}>
          <option value="react">React</option>
          <option value="vue">Vue</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
