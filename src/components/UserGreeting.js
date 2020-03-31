import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false
    };
  }

  //   1st Approach
  //   render() {
  //     if (this.state.isLoggedIn)
  //       return (
  //         <div>
  //           <div>Welcome User</div>
  //         </div>
  //       );
  //     else
  //       return (
  //         <div>
  //           <div>Welcome Guest</div>
  //         </div>
  //       );
  //   }

  //   2nd Approach

  //   render() {
  //     let content;
  //     if (this.state.isLoggedIn) content = <div>Welcome User</div>;
  //     else content = <div>Welcome Guest</div>;

  //     return <div>{content}</div>;
  //   }

  // 3rd Approach
  //   render() {
  //     return this.state.isLoggedIn ? (
  //       <div>Welcome User</div>
  //     ) : (
  //       <div>Welcome Guest</div>
  //     );
  //   }

  //   4th Approach
  render() {
    return !this.state.isLoggedIn && <div>Login Please</div>;
  }
}

export default UserGreeting;
