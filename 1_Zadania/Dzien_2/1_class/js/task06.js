let foods =[];
class Food {
  constructor(name, protein, carbs, fat) {
    this.name = name;
    this.protein = protein;
    this.carbs = carbs;
    this.fat = fat;
  }
}
class FastFood extends Food{
}
class FatFreeFood extends Food{
}
const foodName = document.getElementById('name');
const foodProteins = document.getElementById('proteins');
const foodCarbs = document.getElementById('carbs');
const foodFat = document.getElementById('fat');
const foodAdd = document.getElementById('add');
const placeToInsert = document.getElementById('products');
foodAdd.addEventListener('click', function (event) {
  event.preventDefault();
  let append = (foodName, amountCalories) => {
    const newLi = document.createElement('li');
    const newStrong = document.createElement('strong');
    const newSpan = document.createElement('span');
    newStrong.innerText = `Name of Food:  ${foodName}`;
    newSpan.innerText = `Amount Of Calories: ${amountCalories}`;
    newLi.appendChild(newStrong);
    newLi.appendChild(newSpan);
    placeToInsert.appendChild(newLi);
    console.log(foods);
  };
  let calories = parseFloat(foodProteins.value) * 4 + parseFloat(foodCarbs.value) * 4 + parseFloat(foodFat.value) * 26;
  if (calories > 250) {
    let fastFood = new FastFood(foodName.value, foodProteins.value, foodCarbs.value, foodFat.value);
    foods.push(fastFood);
    append(fastFood.name, calories);
  } else {
    let fatFreeFood = new FatFreeFood(foodName.value, foodProteins.value, foodCarbs.value, foodFat.value);
    foods.push(fatFreeFood);
    append(fatFreeFood.name, calories);
  }
  foodName.value="";
  foodProteins.value="";
  foodCarbs.value="";
  foodFat.value = "";
});
