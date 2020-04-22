import React from "react";
import ReactDOM from "react-dom";
import React from "react";
import ReactDOM from "react-dom";
import { lastDayOfDecade } from "date-fns";

let numberA = parseFloat(prompt("podaj A"));
let numberB = parseFloat(prompt("podaj B"));
let operation = prompt("podaj operacje +, -, /, *");

function makeOperation(a, b, operation) {
    let mathOperations = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
        "/": (a, b) => a / b,
        "*": (a, b) => a * b
    };

    if (!(operation in mathOperations)) {
        return "operator musi być jedną z wartości: + - * / ";
    }
    return mathOperations[operation](a, b);
}

function returnElementH(operation, text) {
    let elements = {
        "+": <h1>{text}</h1>,
        "-": <h2>{text}</h2>,
        "/": <h3>{text}</h3>,
        "*": <h4>{text}</h4>
    }
    if (!(operation in elements)) {
        return <h1>{text}</h1>;
    }
    return elements[operation];
}

ReactDOM.render(
    returnElementH(operation, `${numberA} ${operation} ${numberB} =  ${makeOperation(numberA, numberB, operation)}`),
    //<h1>{numberA} {operation} {numberB} =  {makeOperation(numberA, numberB, operation)}</h1>,
    document.getElementById("app")
);
Co