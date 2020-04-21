const cities = ["Kraków", "Olsztyn", "Szczecin", "Ostrów Wielkopolski"];

let arrays = () => {
    let array = [];
    cities.forEach(elem => {
        array.push(elem.length);
        return array
    });
    console.log(array)
};

let arr = element => element.length;
const result = cities.map(arr); console.log(result);

