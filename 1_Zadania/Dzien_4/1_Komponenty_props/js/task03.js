import React, {Component} from "react";
import ReactDOM from "react-dom";
let dataArray = [
    {
        url: "/",
        text: "Strona główna"
    },
    {
        url: "/blog",
        text: "Blog"
    },
    {
        url: "/cennik",
        text: "Cennik"
    },
    {
        url: "/kontakt",
        text: "Kontakt"
    }
];
function MenuGenerator(props){
    return (
        <ul className="nav-list">
            {props.element.map((element,index) => {
                return <li key={index}><a href={element.url}>{element.text}</a></li>
            })}
        </ul>
    )
}
// {} są potrzebne jesli chcemy zapakowac do nich jakie wyrazenie bo innaczej odczyta to jako text jesli damyy do ""
ReactDOM.render(
    <>
        <MenuGenerator element={dataArray}/>
    </>  ,
    document.getElementById("app")
);