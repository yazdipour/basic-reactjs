// Functional Component
// Stateless (With Hooks this is not right)
// no 'this' keyword
// no logic only UI stuff

import React from "react";

// function Greet() {
// return <h1>Hello Greet</h1>
// }
const Greet = props => {
  const { name } = props;
  return (
    <div>
      <h1>
        Hello {props.name} or {name}
      </h1>
      {props.children}
    </div>
  );
};
export default Greet;

// export const Greet = () => <h1>Hello Greet</h1>
