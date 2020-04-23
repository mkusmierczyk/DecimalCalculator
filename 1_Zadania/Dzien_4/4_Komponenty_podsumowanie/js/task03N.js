class Item {
    constructor(name, price, inStock, quantityM) {
        this.name = name;
        this.price = price;
        this.instock = inStock;
        this.quantityM = quantityM
    }

    isInStock() {
        if (this.instock === 0) {
            return console.log("Brak w magazynie")
        } else console.log("Przedmiot dostępny")
    }


    order(quantity) {

        if (quantity > this.quantityM) {
            return false;
        } else this.quantityM = this.quantityM - quantity

    }
}

class TShirt extends Item {
    constructor(name, price, inStock, quantityM, materials, sizes) {
        super(name, price, inStock, quantityM);
        this.materials = []
        this.sizes = ["S", "M", "L", "Xl"]
    }

    addMaterial(materials) {
        this.materials = [...materials]

    }

    removeSize(size) {
        this.sizes = this.sizes.filter(size => this.sizes !== size);

    }

}

const tshirt = new TShirt ("tshirt", 299.99, true, 40);

console.log(tshirt.isInStock()); // Produkt dostępny
console.log(tshirt.order(30)); // 8999.7
console.log(tshirt.order(30)); // false
console.log(tshirt.order(10)); // 2999.9
console.log(tshirt.isInStock()); // Brak w magazynie

tshirt.addMaterial("wełna");
tshirt.addMaterial("jeans");
tshirt.addMaterial("bawełna");
console.log(tshirt.materials);            // ["wełna", "jeans", "bawełna"]

tshirt.removeSize("S");
tshirt.removeSize("M");

console.log(tshirt.sizes); // ["L", "XL"]
