import React from "react";

function Person({ person }) {
  return (
    <div>
      Hi This is {person.name}, {person.age} years old.
    </div>
  );
}

export default Person;
