import React, {Component} from "react";
import ReactDOM from "react-dom";
import items from "./data/products.js";


function Receipt({items}) {

    return (
        <table className='table'>
            <TableHead/>
            <TableBody items={items}/>
            <TableFooter items={items}/>
        </table>
    )
}

function TableHead() {
    let header = [
        'nazwa',
        'cena-jednostkowa',
        'ilosc',
        'wartość'
    ]
    return (
        <tr>
            {header.map((e, index) => <th key={index}> {e}</th>)}
        </tr>
    )
}

function TableBody(props) {
    return (
        props.items.map(elem =>
            <tr key={elem.code}>
                <td>{elem.name}</td>
                <td>{elem.single_price}</td>
                <td>{elem.qty}</td>
                <td>{(elem.qty * elem.single_price).toFixed(2)}</td>
            </tr>)
    )
}

function TableFooter({items}) {
    let sum = 0
    for (let i = 0; i < items.length; i++) {

        sum += items[i].qty * items[i].single_price


    }
    return (
        <tr>
            <td>Suma</td>
            <td></td>
            <td></td>
            <td>{sum.toFixed(2)}</td>

        </tr>
    )
}

function App() {

    return <Receipt items={items}/>
}

ReactDOM.render(
    <App/>,
    document.getElementById("app")
);