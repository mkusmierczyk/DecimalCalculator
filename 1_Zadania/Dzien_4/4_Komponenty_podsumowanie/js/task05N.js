import React, {Component} from "react";
import ReactDOM from "react-dom";

function PersonalData(props) {
    const {name, surname, street, house_number} = props.data;
    return (
        <div className="person">
            <NameSurname name={name} surname={surname}/>
            <StreetNumber street={street} house_number={house_number}/>

        </div>
    )
}

function NameSurname({name, surname}) {
    return (
        <>
            <h2> {name}</h2>
            <h2> {surname}</h2>
        </>
    )
}

function StreetNumber({street, house_number}) {
    return (
        <div>
            {street}
            {house_number}
        </div>
    )
}

function App() {
    const sampleData = {
        name: 'Jan',
        surname: 'Nowak',
        street: "Mazowiecka ",
        house_number: "43B",
    };
    return <PersonalData data={sampleData}/>
}

ReactDOM.render(
    <App/>,
    document.getElementById("app")
);