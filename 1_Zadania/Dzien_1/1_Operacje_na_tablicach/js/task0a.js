const cities = ["Kraków", "Olsztyn", "Szczecin", "Ostrów Wielkopolski"];
let array = [];
   let arrays = () =>{ cities.forEach( elem => {

       array.push(elem.length);
       return array
    });
    console.log(array)
   };

    arrays(cities);

