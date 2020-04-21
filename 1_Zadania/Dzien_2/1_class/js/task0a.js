//Zadanie 0a

class Vehicle {
    constructor (name) {
        this.name = name;
    }
}

class Plane extends Vehicle {
    fly() {
        console.log("lecę");
    }
}

class Car extends Vehicle {
    drive() {
        console.log("Jadę");
    }
}

class Boat extends Vehicle {
    sail() {
        console.log("Płynę");
    }
}

let vehicles = [
    new Car("fiat 126p"),
    new Plane("Boeing 767"),
    new Boat("Santa Maria")
];

vehicles[0].drive();
vehicles[1].fly();
vehicles[2].sail();

// vehicles.forEach( vehicle => vehicle.move() )


console.log("Zadanie dodatkowe");

class Book { //nowy zapis w ES6
    constructor(title, author, pages) { // konstruktor jest teraz metoda
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.name = 'rodzic';
    }
    showInfo() {  //ta metoda bedzie ustawiona na prototypie - hurra :)
        console.log(this.title, this.author, this.pages);
    }
}

class EBook extends Book{  //proste dziedziczenie - wystarczy uzyc slowa extends
    constructor(title, author, pages, sizeInMB) {
        //rodzic potrzebuje pewnych informacji, przekazujemy mu je za pomoca super
        //super(parametry) - wywola konstruktor rodzica z parametrami
        super(title, author, pages); // super - odowołuje sie do rodzica - w tym wypadku do konstruktora
        this.sizeInMB = sizeInMB; // tu ustawiamy dotkowe informacje,ktorych nie ma nasz rodzic
    }
    showInfo() {
        //super mozna tez uzyc do metody rodzica
        super.showInfo(); // super - daje nam dostep do metod rodzica
        console.log('rozmiar pliku',this.sizeInMB, 'MB');
    }
}

let book = new Book("Harry Potter i Kamień Filozoficzny", "J.K.Rowling", 450);
// console.log(book.title);
// console.log(book.author);

let ebook = new EBook("Harry Potter i Kamień Filozoficzny", "J.K.Rowling", 450, 2.56);

ebook.showInfo();

console.log(ebook);