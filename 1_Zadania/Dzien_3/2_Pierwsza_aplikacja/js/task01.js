import React from "react";
import ReactDOM from "react-dom";

let name = "jan";
function sayHello(name){
    return `Hi ${name}`
}
ReactDOM.render(
     <div>
    {/* można wprowadzić <> jesli nie potrzebujemy Diva*/}
    <h1>Przywitanie z React</h1>
    <h1>{sayHello(name)} {2+2}</h1>
        <input type = 'text' value = 'abc'/>
    </div>,
    document.getElementById("app"));