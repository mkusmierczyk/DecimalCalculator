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

