function showAnimal() {
    const cat = {
        name: "Mruczek",
        age: 10,
        getVoice: () => "miau miau"
    };
    console.log(`Kot ${cat.name} ma ${cat.age} lat i robi ${cat.getVoice()}`)
}

showAnimal();