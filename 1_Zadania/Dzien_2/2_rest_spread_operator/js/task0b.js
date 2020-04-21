function getAvarage(...numbers) {
let sum = numbers.reduce((a,b)=> a+b);
    return sum/numbers.length
}

console.log(getAvarage(1,2,3,4,5,6,7,8));