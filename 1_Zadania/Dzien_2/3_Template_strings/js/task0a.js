const person = {
    name: "Vlad",
    lastName: "Drăculea",
    yearOfBirth: 1431,
    proffesion: "Lord of Wallachia"
};


function whoAreYou(person) {
    return `My name is ${person.name} ${person.lastName}.
        I am ${new Date().getFullYear() - person.yearOfBirth} years old.
        My proffesion is ${person.proffesion}.`

}

console.log(whoAreYou(person));;