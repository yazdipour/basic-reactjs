//rcfe snippet
import React from "react";

function FunctionClick() {
  function clickHandler() {
    alert("hallo");
  }
  return (
    <div>
      rcfe to build
      <button onClick={clickHandler}>Btn Event Handler</button>
    </div>
  );
}

export default FunctionClick;
