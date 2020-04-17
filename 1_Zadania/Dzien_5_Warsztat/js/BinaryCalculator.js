import Calculator from "./Calculator";

class BinaryCalculator extends Calculator {
  constructor(settings) {
    super(settings);
    console.log(this.getName());
  }

  /* Method add numbers in two array
  *  @param {array} numberX First number
  *  @param {array} numberY Second number
  *  @return {array}
  */
  add(numberX, numberY) {
    let result = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let i = numberX.length - 1; i >= 0; i--) {
      let carryBit = numberX[i] + numberY[i] + result[i];
      if (carryBit === 2) {
        result[i] = 0;
        result[i - 1] = 1;
      } else if (carryBit === 3) {
        result[i] = 1;
        result[i - 1] = 1;
      } else {
        result[i] = carryBit;
      }
    }
    return result;
  }

  /* Method changing number
  */
  changeNumber(root) {
    let activeElement = root.querySelector(".active");
    activeElement.classList.remove("active");

    [...activeElement.parentElement.children].forEach(el => {
      if (el !== activeElement) {
        el.classList.add("active");
      }
    });


    const result = root.querySelector(":first-child");
    if (result.style.display === "none") {
      result.style.display = "flex";
    } else {
      result.style.display = "none";
    }

    this.checkNumber();
    this.updateResult();
  }

  /* Method changing Result
  */
  updateResult() {
    let root = this.$calculatorDOMElement;
    let $resultNumber = root.querySelectorAll(".result-bit");

    for (let i = this.resultNumberArray.length - 1, j = 0; i >= 0; i--, j++) {
      let valueResult = parseInt($resultNumber[j].querySelector(".active").innerText);
      if (this.resultNumberArray[i] != valueResult) {
        let activeElement = $resultNumber[j].querySelector(".active");
        activeElement.classList.remove("active");

        [...activeElement.parentElement.children].forEach(el => {
          if (el !== activeElement) {
            el.classList.add("active");
          }
        });

        const result = $resultNumber[j].querySelector(":first-child");
        if (result.style.display === "none") {
          result.style.display = "flex";
        } else {
          result.style.display = "none";
        }
      }
    }
  }
}

export default BinaryCalculator;
