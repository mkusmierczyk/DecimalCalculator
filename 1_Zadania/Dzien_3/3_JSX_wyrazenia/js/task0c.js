import React from "react";
import ReactDOM from "react-dom";
import person from './data/person';

let{title, name, surname, age} = person;

ReactDOM.render(
  <ul>
      <li>{title}</li>
      <li>{name}</li>
      <li>{surname}</li>
      <li>{age}</li>
  </ul>,
  document.getElementById("app")
);
