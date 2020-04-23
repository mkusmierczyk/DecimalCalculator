import React, {Component} from "react";
import ReactDOM from "react-dom";
function Sum(props) {
    return (
        <h1>{props.numbers.reduce((a, b) => a + b)}</h1>
    )
};
ReactDOM.render(
    <Sum numbers={[2, 4, 6, 8, 54]}/>,
    document.getElementById("app")
);