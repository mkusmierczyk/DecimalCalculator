import React from "react";
import ReactDOM from "react-dom";


const imageUrl = "https://images.pexels.com/photos/1061588/pexels-photo-1061588.jpeg";
const style = {
    width: '100%'
};
ReactDOM.render(
  < img src = {imageUrl} style={{width:'100%'}}/>,
  document.getElementById("app")
);
