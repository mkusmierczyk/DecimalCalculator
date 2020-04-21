const wally = {
    name: "Wally",
    age: 2,
    profession: "naprawianie innych robotów"
};
const  {name:robotName, age ,profession } = wally;


let saySomething = robot => console.log(`Cześć mam na imię ${robotName}, mam ${age} lata i moim zajęciem ${profession}".`)



saySomething(wally);
