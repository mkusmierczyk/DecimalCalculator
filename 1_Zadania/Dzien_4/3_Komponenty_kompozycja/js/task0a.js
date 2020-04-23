import React, {Component} from "react";
import ReactDOM from "react-dom";

function App(props) {
    return (
        <ParentComponent>
            <div>
                <h1>To działa!</h1>
                <div>
                    <h3>to h3</h3>
                    <h4>to h4</h4>
                </div>
                <h2>Zawiera oba</h2>
            </div>
        </ParentComponent>
    )
}

function ParentComponent(props){
    return <ChildComponent>
        {props.children}
    </ChildComponent>
}
function ChildComponent(props){
    return <>
        <GrandchildComponent>{props.children}</GrandchildComponent>
        {props.children}
    </>
}
function GrandchildComponent(props){
    return props.children;
}

// -- ParentComponent
//     |-- ChildComponent
//           |-- GrandchildComponent
//                 |-- <h1>To działa!</h1>
ReactDOM.render(
    <App/>,
    document.getElementById("app")
);




//prosty przykład
// import React, {Component} from "react";
// import ReactDOM from "react-dom";
// ​
// function AddNumbers({numberA, numberB, children}) {
//     return <h1> {numberA + numberB} {children}</h1>
// }
// ​
// function App(props) {
//     return (
//         <>
//             <AddNumbers numberA={10} numberB={20} >
//                 <h1>To jest props.children</h1>
//             </AddNumbers>
//             <AddNumbers numberA={1} numberB={2} >
//                 <p> adsadsad </p>
//             </AddNumbers>
//         </>
//     )
// }
// ​
// ReactDOM.render(
//     <App/>,
//     document.getElementById("app")
// );