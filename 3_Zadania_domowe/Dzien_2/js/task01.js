class Insect {
    constructor(bugName, legs, bugSpecies) {
        this.bugName = bugName;
        this.legs = legs;
        this.bugSpecies = bugSpecies
    }
    getLegs(){
        return this.legs
    }
}

class Centipede extends Insect{ //Czy musi być w konstruktore i super
    constructor(bugName, legs, bugSpecies) {
        super(bugName,legs, bugSpecies);
    }
}

let centipede = new Centipede("roman", 22,"stonogą");
console.log(`Cześć mam na imię ${centipede.bugName} jestem stonogą i mam ${centipede.getLegs()} nogi`);

class Spider extends Insect{
    constructor(bugName, legs, bugSpecies){
        super(bugName, legs, bugSpecies)
    }
}
let spider = new Spider("Józef", 8 , "pająkiem");
console.log(`Cześć mam na imię ${spider.bugName} jestem ${spider.bugSpecies} i mam ${spider.getLegs()} nóg`)