import React from "react";
import ReactDOM from "react-dom";


let yearOfBirth = parseInt(prompt("Podaj datę urodzenia"));

ReactDOM.render(
  <h1>Twój wiek to {new Date().getFullYear() - yearOfBirth}</h1>,
  document.getElementById("app")
);
