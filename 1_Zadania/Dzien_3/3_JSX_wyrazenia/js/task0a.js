import React from "react";
import ReactDOM from "react-dom";

let numberA = parseFloat(prompt("Podaj Liczbę A"));
let numberB = parseFloat(prompt("Podaj Liczbę B"));
ReactDOM.render(
  <div>Wynik dodawania {numberA} + {numberB} = {numberA+numberB}</div>,
  document.getElementById("app")
);
