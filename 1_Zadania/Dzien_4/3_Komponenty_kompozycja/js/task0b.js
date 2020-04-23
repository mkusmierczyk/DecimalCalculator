import React, {Component} from "react";
import ReactDOM from "react-dom";

function ShopItem(props) {
    const {title, image, description, price} = props.data;
    return (
        <section>
            <ShopItemHeader title={title} image={image}/>
            <ShopItemDescription description={description} />
            <ShopItemPricing price={price} />
        </section>
    )
}

function ShopItemHeader({title, image}) {
    return (
        <header>
            <h1>{title}</h1>
            <img src={image}/>
        </header>
    )
}
function ShopItemDescription({description}) {
    return (
        <article>
            <p>{description}</p>
        </article>
    )
}
function ShopItemPricing({price}) {
    return (
        <footer>
            Cena: {price} zł
            <button>Kup!</button>
        </footer>
    )
}


function App() {
    const sampleData = {
        title: "MacBook Pro",
        image: "https://bit.ly/2EEtduD",
        description: "Moc i mobilność – MacBook Pro wyraźnie podnosi tu poprzeczkę. Teraz możesz jeszcze szybciej realizować swoje pomysły. Pomogą Ci w tym wydajne procesory i układy pamięci, zaawansowana grafika, błyskawicznie działająca pamięć masowa i inne doskonałe rozwiązania.",
        price: 9999
    };
    return <ShopItem data={sampleData} />
}

ReactDOM.render(
    <App/>,
    document.getElementById("app")
);
export{ShopItemHeader};