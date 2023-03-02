import React from "react";
import ReactDOM from "react-dom";

const fName = "Sunny";
const lName = "Liu";
const number = "7";
ReactDOM.render(
  <div>
    <h1>
      Hello {fName} {lName}
    </h1>
    <p>your lucky number is {number}</p>
  </div>,
  document.getElementById("root")
);
