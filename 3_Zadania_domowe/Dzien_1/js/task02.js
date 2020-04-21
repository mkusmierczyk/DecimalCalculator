class Weather {
    constructor(temp) {
        this.tempArr = temp;
    }

    getAvgTemperature() {
         this.tempArr.reduce(function(accumulator, currentValue, currentIndex, array) {
             let acc = 0;
             acc= (accumulator+currentValue);
             return console.log(acc)
         })

    };
}

let monday = new Weather([-2, 5, 3]);
monday.getAvgTemperature();


// let getAvgTemperature = (tempArr)=> {
//     tempArr.reduce((temp1, temp2) => {
//         return console.log((temp1 + temp2) / tempArr.length)
//     });
//
// };
// getAvgTemperature([5,6,5]);
//
