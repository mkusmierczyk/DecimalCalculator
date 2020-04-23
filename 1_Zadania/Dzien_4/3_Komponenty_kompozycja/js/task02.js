import React, {Component} from "react";
import ReactDOM from "react-dom";

function Chat(props) {
    return (
        <section className="chat">
            <ChatHeader/>
            <ChatMessages/>

            <NewChatMessage/>

        </section>
    );
}

function ChatHeader() {
    return (<header>
        <h1>Chat prywatny</h1>
    </header>)
}

function ChatMessages() {
    return (<div>
        <ul>
            <li>Wpis z chatu 1</li>
            <li>Wpis z chatu 2</li>

            <ChatMessage/>
        </ul>
    </div>)
}
function ChatMessage() {
    return (<li>Wpis z chatu 3</li>)
}


function NewChatMessage() {
    return (
        <footer>
            <form>
                <input type="text"/>
                <button>Wyślij</button>
            </form>
        </footer>)
}


function App(props) {
    return <Chat/>;
}

ReactDOM.render(
    <App/>,
    document.getElementById("app")
);