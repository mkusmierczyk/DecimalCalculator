console.log("zadanie 1");

class Duck {
    constructor() {
        this.type = "zwykła kaczka";
    }

    kwark() {
        console.log("kwa kwa");
    }

    swim() {
        console.log("płynę");
    }

    show() {
        console.log("Wygląda jak " + this.type)
    }

    fly() {
        console.log("Lecę")
    }
}

let kaczucha = new Duck();
kaczucha.kwark();
kaczucha.swim();
kaczucha.show();

console.log("Zadanie 2");

class WildDuck extends Duck {
    constructor() {
        super();
        this.type = "dzika"

    }
}

let wildDuck = new WildDuck();

wildDuck.swim();
wildDuck.kwark();
wildDuck.show();

console.log("Zadanie 3");

class Malard extends Duck {
    constructor() {
        super();
        this.type = "krzyżówka"
    }
}

let malard = new Malard();
malard.swim();
malard.kwark();
malard.show();


console.log("Zadanie 4");
malard.fly();

console.log("Zadanie 5");

class GumDuck extends Duck {
    constructor() {
        super();
        this.type = "Gumowa"
    }

    fly() {
        console.log("Gumowe kaczki nie latają")
    }

}

let gumDuck = new GumDuck();

gumDuck.show();
gumDuck.swim();
gumDuck.kwark();
gumDuck.fly();

console.log("Zadanie 6");

class Food {
    constructor() {
        this.productName = productName;
        this.protein = protein;
        this.carb = carb;
        this.fat = fat;

    }
    print(){
        console.log( `${this.productName} ${this.protein} ${this.carb} ${this.fat}`)
    }
}
class FastFood extends Food {

}
class FatFreeFood extends Food {

}

let hamburger =  new FastFood();



let btn = document.getElementById("add");
let product = document.getElementById("name");
let proteins = document.getElementById("proteins");
let carbs = document.getElementById("carbs");
let fats = document.getElementById("fat");

btn.addEventListener("click",  function (event) {
    event.preventDefault();

//console.log(event.target) Jeśli chcemy element za pomocąfunkcji strzałkowej

    let list = document.querySelector("#products ");
    let liElem = document.createElement("li");
    liElem.className = "products";
    liElem.style.listStyle = "none";
    list.appendChild(liElem);


    let strong = document.createElement("strong");
    strong.innerText = product.value;
    list.appendChild(strong);

    let span = document.createElement("span");
    span.innerText = ` Białka: ${proteins.value}  Węglowodany: ${carbs.value} Tłuszcze: ${fats.value}`;
    list.appendChild(span);

});






