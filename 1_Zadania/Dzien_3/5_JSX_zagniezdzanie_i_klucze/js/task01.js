import React, {Component} from "react";
import ReactDOM from "react-dom";
import person from "./data/person";





ReactDOM.render(
    <>
        {person.map(({ title, name, surname,age}) => <h1 >{title} {name} {surname} <span > {age}  </span>
        </h1>)}

    </>,
    document.getElementById("app")
);
