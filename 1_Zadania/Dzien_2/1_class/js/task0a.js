class Vehicle {
    constructor(name) {
        this.name = name
    }
}


class Boat extends Vehicle{
    move(){
        console.log("płynę");
    }
}
class Car extends Vehicle{
    move(){
        console.log("jadę");
    }
}
class Plane extends Vehicle{
    move(){
        console.log("płynę");
    }
}

let vehicles =[new Car('fiat 126p'), new Plane('Boeing'), Boat("Santa MAria")];
vehicles.forEach(vehicle =>{
    console.log(vehicle.name);
    vehicle.move()
});