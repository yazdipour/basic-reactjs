import React from "react";
import "../Styles/Stylesheet.css";

export default function Stylesheet(props) {
  let inlineStyle = {
    fontSize: 10
  };

  return (
    <div>
      <h1 className="orangeText">Orange Style</h1>
      <h1 className={`orangeText`}>Orange Style</h1>
      <h1 className={`${props.xclass}`}>Pass Style</h1>
      <h1 className={`${props.xclass} orangeText`}>Pass + Orange Style</h1>

      <h1 style={inlineStyle}>Inline Style</h1>
      <h1 style={{ fontSize: 22 }}>Inline Style2</h1>
    </div>
  );
}
