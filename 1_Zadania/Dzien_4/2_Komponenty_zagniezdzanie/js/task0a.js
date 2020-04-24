import React, {Component} from "react";
import ReactDOM from "react-dom";

//<CurrencyConverter from="EUR" to="USD" value={200} rate={1.12275} />
function CurrencyConverter(props) {
    let {from, to, value, rate} = props;
    return (
        <div>
            <strong>{value}</strong> {from} => <strong>{(value * rate).toFixed(2)}</strong> {to}
        </div>
    )
}
function App(props) {
    return (
        <div>
            <CurrencyConverter from="EUR" to="USD" value={200} rate={1.12275} />
            <CurrencyConverter from="PLN" to="USD" value={100} rate={0.12275} />
            <CurrencyConverter from="USD" to="PLN" value={200} rate={3.75275} />
        </div>
    )
}



ReactDOM.render(<App/>, document.getElementById("app"));