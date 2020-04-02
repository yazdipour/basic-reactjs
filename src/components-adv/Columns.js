import React from "react";

export default function Columns() {
  return (
    <React.Fragment>
      {/* If use div it will Throw Exception */}
      <td>Name</td>
      <td>Shahriar</td>
    </React.Fragment>
  );

  // Alternative
  /* <>
    <td>Name</td>
    <td>Shahriar</td>
    </> */
}
