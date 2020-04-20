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
  let listAll = document.querySelector(".car-body ");
  const ul1 = document.createElement("ul");
 ul1.className = "all-products";
 let li =  document.createElement("li");

});



let cars = products.filter(function (cars) {
  cars.category === "car" && cars.condition === "new" && cars.price < 45000;
  let listAll = document.querySelector(".car-body ");
  const ul1 = document.createElement("ul");
  ul1.appendChild(listAll);
  return

});




let listSelected = document.querySelector(".card-header");
const ul1 = document.createElement("ul");
ul1.id ="all-products";



// products.forEach(function (element) {
//
//
// });
//






// products.filter(element){
//   element === "car" ||
//   element.category === "new"||
//       element.price <45000;
//   console.log(products)
// }