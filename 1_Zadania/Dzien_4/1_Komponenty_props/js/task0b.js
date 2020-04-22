import React, {Component} from "react";
import ReactDOM from "react-dom";

function AddNumbers(props) {
    let {numberA, numberB} = props;
    return <h1> Dodawnie {numberA} + {numberB} = {numberA + numberB} </h1>
}

class AddTwoNumbers extends Component {
    render() {
        let {numberA, numberB} = this.props;
        return <h1> Dodawnie {numberA} + {numberB} = {numberA + numberB} </h1>
    }
}

ReactDOM.render(
    <>
        <AddNumbers numberA={10} numberB={20} />
        <AddTwoNumbers numberA={7} numberB={13} />
    </>,
    document.getElementById("app")
);