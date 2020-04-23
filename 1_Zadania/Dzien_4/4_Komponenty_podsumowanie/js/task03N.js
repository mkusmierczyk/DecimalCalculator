class Item {
    constructor(name, price, inStock, quantity) {
        this.name = name;
        this.price = price;
        this.inStock = inStock;
        this.quantity = quantity;
    }

    isInStock(inStock) {
        if (this.quantity <= 0) {
            this.inStock = false;
        }
        if (this.inStock === true) {
            return "Przedmiot dostępny";
        } else {
            return "Brak w magazynie";
        }
    }

    order(quantity) {
        if (quantity > this.quantity) {
            return false;
        }

        if (quantity <= this.quantity) {
            this.quantity -= quantity;
            return quantity * this.price;
        }
    }
}

class TShirt extends Item {
    constructor(name, price, inStock, quantity, materials, sizes) {
        super(name, price, inStock, quantity);
        this.materials = [];
        this.sizes = ["S", "M", "L", "XL"]
    }

    addMaterial(material) {
        let addMaterial = material
        this.materials.push(addMaterial)

        return this.materials;
    }

    removeSize(size) {
        function remove(value) {
            return value !== size;
        }
      this.sizes =  this.sizes.filter(remove)
        return this.sizes
        }

}

const tshirt = new TShirt("tshirt", 299.99, true, 40);

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
