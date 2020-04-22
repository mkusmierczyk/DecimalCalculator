import React from "react";
import ReactDOM from "react-dom";

const redDiv = <div style = {{backgroundColor:"red", height:'100px'} }/>;
const greenDiv = <div style = {{backgroundColor:"green", height:'100px'} }/>;
const blueDiv = <div style = {{backgroundColor:"blue", height:'100px'} }/>;

ReactDOM.render(
  <>
      {redDiv}{greenDiv}{blueDiv}
  </>,
  document.getElementById("app")
);
