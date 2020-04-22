import React, {Component} from "react";
import ReactDOM from "react-dom";

function Menu() {
    return (
        <div>
            <p> 100 likes </p>
            <button>Lubię to !</button>
        </div>
    )
}

ReactDOM.render(
 <>
     <Menu />
     </>,
  document.getElementById("app")
);
