import React from "react";
import Person from "./Person";

export default function NameList() {
  const persons = [
    { name: "Bob", age: 2 },
    { name: "Alice", age: 3 }
  ];
  return (
    <div>
      {persons.map(n => (
        <Person person={n} key={n.name} />
      ))}

      {persons.map((n, inx) => (
        <Person person={n} key={inx} />
      ))}
    </div>
  );
}
