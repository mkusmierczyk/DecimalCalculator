import React, {Component} from "react";
import ReactDOM from "react-dom";
import {ShopItemHeader} from "./task0b";


function ShopList(props) {

    return (
        <section>
            {props.items.map(e => <ShopItemHeader title={e.title} image={e.image}/>)}
        </section>
    )
}


function App() {
    const itemsData = [
            {
                title: "Mysz komputerowa",
                image: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Red_computer_mouse.jpg"
            },
            {
                title: "Klawiatura",
                image:
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Computer_keyboard_Danish_layout.svg/1000px-Computer_keyboard_Danish_layout.svg.png"
            },
            {
                title: "Laptop programisty",
                image:
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Typing_computer_screen_reflection.jpg/640px-Typing_computer_screen_reflection.jpg"
            }
        ]
    ;
    return <ShopList items={itemsData}/>
}


ReactDOM.render(
    <App/>,
    document.getElementById("app")
);