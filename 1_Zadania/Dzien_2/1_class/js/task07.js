class MenuGenerator {
    constructor(menuTypes, menuElem) {
        this.menuTypes = menuTypes;
        this.menuElem = menuElem;
    }

    getType() {
        return this.menuTypes
    }

    showItems() {
        return this.menuElem
    }
}

class HorizontalMenuGenerator extends MenuGenerator {
    constructor(menuTypes, menuElem) {
        super(menuTypes, menuElem)
    }

}

let hMenuGenerator = new HorizontalMenuGenerator("horizontal", ['start', 'about']);
console.log(hMenuGenerator);

class VerticalMenuGenerator extends MenuGenerator {
    constructor(menuTypes, menuElem) {
        super(menuTypes, menuElem)
    }

    animated() {
        console.log("Animacja menu typu: vertical")
    }
}

let vMenuGenerator = new VerticalMenuGenerator("vertical", ['home', 'contact']);
console.log(vMenuGenerator);
vMenuGenerator.animated();