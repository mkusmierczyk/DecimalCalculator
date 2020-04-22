class Weather {
    constructor(temp) {
        this.tempArr = temp;
    }

   getAvgTemperature() {
        let sum =  this.tempArr.reduce((a,b)=> a+b);
        return sum/this.tempArr.length
    }

}

let monday = new Weather([-2, -2, -1,5,5]);
monday.getAvgTemperature();

let avg = document.querySelector(".avg");

avg.innerText = monday.getAvgTemperature();


// let getAvgTemperature = (tempArr)=> {
//     tempArr.reduce((temp1, temp2) => {
//         return console.log((temp1 + temp2) / tempArr.length)
//     });
//
// };
// getAvgTemperature([5,6,5]);
//
