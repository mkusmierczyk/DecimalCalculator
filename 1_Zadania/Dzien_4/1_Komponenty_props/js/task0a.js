import React, {Component} from "react";
import ReactDOM from "react-dom";


function Hello(props) { //tutaj argument props - zawiera dane z properties
    let {name, surname} = props;
    return <h1>Hello, {name} {surname}</h1>;
}

class Hi extends Component {
    render() {
        let {name, surname} = this.props;
        return <h1>Hello, {name} {surname}</h1>;
    }
}

ReactDOM.render(
    <>
        <Hello name="Jan" surname="Brzechwa" />
        <Hi name="Adam" surname="Nowak" />
    </>,
    document.getElementById("app")
);
