class Calculator {
  constructor(firstNumber, secondNumber) {
    this.firstNumber = firstNumber;
    this.secondNumber = secondNumber;
  }
  calcSum() {
    document.getElementById("result").value =
      this.firstNumber + this.secondNumber;
  }
  calcSubtraction() {
    document.getElementById("result").value =
      this.firstNumber - this.secondNumber;
  }
  calcMultiplication() {
    document.getElementById("result").value =
      this.firstNumber * this.secondNumber;
  }
  calcDivision() {
    document.getElementById("result").value =
      this.firstNumber / this.secondNumber;
    if (this.secondNumber == 0) {
      alert("На ноль делить нельзя!");
    }
  }
}

let calc = new Calculator(
  Number(document.getElementById("firstNumber").value),
  Number(document.getElementById("secondNumber").value)
);

calc.calcSum();
calc.calcSubtraction();
calc.calcMultiplication();
calc.calcDivision();
