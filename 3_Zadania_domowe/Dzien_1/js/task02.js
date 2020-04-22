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


