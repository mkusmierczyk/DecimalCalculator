import React, {Component} from "react";
import ReactDOM from "react-dom";

function Child(props) {

    return (
        <div>
            <div>Hello World!"</div>
            <h1>React Rules!</h1>
            <span>I love React</span>
            <h2> Wersja 1.0.0 " i {new Date().getFullYear()} rok </h2>
            {props.children}
        </div>
    )
}

function App() {

    return (
        <Child/>
    )
}



ReactDOM.render(
    <App/>,
    document.getElementById("app")
);

// function Appp() {
//     return (
//         <>
//             <div>Hello World!</div>
//             <h1>React rules!</h1>
//             <span>I love React</span>
//             <h2>Wersja 1.0.0 {new Date().getFullYear()}</h2>
//         </>
//     )
// }
// ReactDOM.render(
//     <Appp/>,
//     document.getElementById("app"));