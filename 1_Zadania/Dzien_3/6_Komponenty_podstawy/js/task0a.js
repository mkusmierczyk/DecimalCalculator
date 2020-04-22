import React, {Component} from "react";
import ReactDOM from "react-dom";


function SearchBox() {
    return (
        <div>
            <input type="text" />
            <button>Wyszukaj</button>
        </div>
    )
}

class SearchDiv extends Component {
    render() {
        return (
            <div>
                <input type="text" />
                <button>Wyszukaj</button>
            </div>
        )
    }
}

ReactDOM.render(
    <>
        <SearchBox />
        <SearchDiv />
    </>,
    document.getElementById("app")
);