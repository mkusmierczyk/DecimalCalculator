import React from "react";
import ReactDOM from "react-dom";
import person from './data/person';

// title: "Mr.",
//     name: "Tester",
//     surname: "Kowalski",
//     age: 41

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
