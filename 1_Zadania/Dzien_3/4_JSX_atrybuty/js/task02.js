import React from "react";
import ReactDOM from "react-dom";


let choice = prompt('Jaki jest kolor ramki');


function checkAnswer(borderCol) {
    let style = {width: "100px", height: '200px', border: '5px solid '};
    let message = "";

    if (borderCol.includes('red')) {
      style.borderColor = 'red';
    }else if (borderCol.includes('blue')){
        style.borderColor = 'blue'
    } else if (borderCol.includes('green')){
        style.borderColor = 'green';
    }else{
        message = "nieprawidłowy color";
        style.border = "none";
    }


    return <div style={style}> {message} </div>;
}

ReactDOM.render(
    checkAnswer(choice),
    document.getElementById("app")
);
