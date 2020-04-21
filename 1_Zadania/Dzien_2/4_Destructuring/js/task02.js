let generateRandomNumbers =  Array.from({length: 6}, () => Math.floor(Math.random() * 6));
console.log(generateRandomNumbers);
let [number1, ,number3  ] = generateRandomNumbers;
console.log(number1);
console.log(number3);







