import React from "react";
import ReactDOM from "react-dom";
import people from "./data/people";

//let peopleDivs = people.map(({id, name, surname}) => <div key={id}> {name} {surname} </div>)
// za pomocą tego można wstawić tylko zmienną do DOM

ReactDOM.render(
  <>
      {people.map(({id, name, surname}) => <div key={id}> {name} {surname} </div>)}
      </>,
  document.getElementById("app")
);
