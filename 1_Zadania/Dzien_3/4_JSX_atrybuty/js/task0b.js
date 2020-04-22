import React from "react";
import ReactDOM from "react-dom";

function genNumber() {
  return Math.round(Math.random() * 9 + 1);
}

let randomA = genNumber();
let randomB = genNumber();

let response = parseInt(prompt(`Podaj wynik ${randomA} + ${randomB} = `));

function checkAnswer(sum, response) {
  let style = {backgroundColor: "red"};
  let message = "Odpowiedź błędna";

  if( sum === response) {
    style.backgroundColor = "green";
    message = "Odpowiedź prawidłowa";
  }

  return <div style={style}> {message} </div>;

}

ReactDOM.render(
    checkAnswer(randomA + randomB, response),
    document.getElementById("app")
);