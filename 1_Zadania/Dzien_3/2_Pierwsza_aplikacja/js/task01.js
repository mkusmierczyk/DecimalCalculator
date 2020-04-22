import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
     <div>
    {/* można wprowadzić <> jesli nie potrzebujemy Diva*/}
    <h1>Przywitanie z React</h1>
    <h1>Hello, World!</h1>
        <input type = 'text' value = 'abc'/>
    </div>,
    document.getElementById("app"));