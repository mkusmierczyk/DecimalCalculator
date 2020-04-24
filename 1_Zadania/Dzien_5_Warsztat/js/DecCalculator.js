import Calculator from "./Calculator";


class DecCalculator extends Calculator {
    constructor(settings) {
        super(settings);
        console.log(this.getName());
    }

    changeNumber(root) {
        let activeElement = root.querySelector(".active");

        activeElement.setAttribute('contenteditable', true);
        [...activeElement.parentElement.children].forEach(el => {
            if (el !== activeElement) {
                el.classList.add("active");

            }
        })
    };

    add(numberX, numberY) {
        let result = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (let i = numberX.length - 1; i >= 0; i--) {
            let carryBit = numberX[i] + numberY[i] + result[i];
            if (carryBit >= 10) {
                result[i] = carryBit - 10;
                result[i - 1] = 1;
            } else {
                result[i] = carryBit;
            }
        }
        return result;
    }


initEvents()
{
    super.initEvents();
    let plus = this.$calculatorDOMElement.querySelector('.operator-bar')
    console.log(plus);
    plus.addEventListener('click',  (event)=> {
        this.checkNumber();
        this.updateResult();
    })

}
    updateResult() {
        let root = this.$calculatorDOMElement;
        let $resultNumber = root.querySelectorAll(".result-bit");

        for (let i = this.resultNumberArray.length - 1, j = 0; i >= 0; i--, j++) {
            ($resultNumber[j].querySelector(".active").innerText =this.resultNumberArray[i]);

        }


    }

/* Method changing number
*/
}


export default DecCalculator;