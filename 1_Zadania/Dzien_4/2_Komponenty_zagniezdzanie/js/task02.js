import React, {Component} from "react";
import ReactDOM from "react-dom";

function AddNumbers(props) {
    let {numberA, numberB} = props;
    return (
        <h1>{numberA + numberB}</h1>
    )
}

class AddNumbers1 extends Component {
    render() {
        const {numberA, numberB} = this.props;

        return (
            <h1>{numberA + numberB}</h1>
        );
    }
}


class App extends Component {
    render() {
        return (<>
            <AddNumbers numberA={10} numberB={20}/>
                < AddNumbers1 numberA={10} numberB={5}/>
            </>);
            }
            }

            ReactDOM.render
            (<App/>, document.getElementById("app"));
