const products = [
    {
        name: "Fiat Tipo",
        category: "car",
        price: 29900,
        condition: "new"
    },
    {
        name: "MacBook Pro",
        category: "computer",
        price: 9999,
        condition: "new"
    },
    {
        name: "Xiaomi Redmi Note 8",
        category: "phone",
        price: 2399,
        condition: "new"
    },
    {
        name: "Audi A6",
        category: "car",
        price: 23450,
        condition: "used"
    },
    {
        name: "Samsung Galaxy Note 9",
        category: "phone",
        price: 1899,
        condition: "used"
    },
    {
        name: "Seat Leon",
        category: "car",
        price: 66000,
        condition: "new"
    },
    {
        name: "Nike Sneakers",
        category: "shoes",
        price: 345,
        condition: "new"
    },
    {
        name: "Dacia Logan",
        category: "car",
        price: 33500,
        condition: "new"
    }
];


let All = products.forEach(function (element) {
    let listAll = document.querySelector("#all-products ");


    let li = document.createElement("li");
    li.className = "all-products";
    li.innerText = element.name;

    listAll.appendChild(li)
});


let cars = products.filter(function (car) {
    return car.category === "car" && car.condition === "new" && car.price < 45000;

});

cars.forEach(function (car) {
    let listSelected = document.querySelector("#filtered-products ");
    let li = document.createElement("li");
    li.className = "selected-products";
    li.style.listStyle = "none";
    listSelected.appendChild(li);


    let strong = document.createElement("strong");
    strong.innerText = car.name;
    listSelected.appendChild(strong);

    let span = document.createElement("span");
    span.innerText = ` Cena: ${car.price}  Rocznik ${car.condition}`;
    listSelected.appendChild(span);

});
