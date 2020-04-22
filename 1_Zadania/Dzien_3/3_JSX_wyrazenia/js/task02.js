import React from "react";
import ReactDOM from "react-dom";

let numberA = parseFloat(prompt("Podaj Liczbę A"));
let numberB = parseFloat(prompt("Podaj Liczbę B"));
let operation =prompt("Podaj znak operacji");

function calc( a, b, operation) {
    let resulto = 0;
    if (operation === "+") {
        resulto = a + b;
        return resulto
    } else if (operation === "-") {
        resulto = a + b;
        return resulto
    } else if (operation === "*") {
        resulto = a * b;
        return resulto
    } else resulto = a / b;
    return resulto;
}


ReactDOM.render(
    <div>
        <h1>Hello, World!</h1>
        <h2>{numberA} {operation} {numberB} = {calc(numberA,numberB,operation)}</h2>
        <h3>  {numberA} {operation} {numberB} = {calc(numberA,numberB,operation)}  </h3>
        <h4>  {numberA} {operation} {numberB} = {calc(numberA,numberB,operation)} </h4>
    </div>,
    document.getElementById("app")
);