import React from "react";
import ReactDOM from "react-dom";
import animals from './data/animals';





ReactDOM.render(
    <>
  <h1>Hello, World!</h1>
    <section>Liczba zwierząt  to {animals.length}. Wszystkie zwierzęta  to {animals.join(",")} </section>
        </>,
  document.getElementById("app")
);


//przeanalizuj