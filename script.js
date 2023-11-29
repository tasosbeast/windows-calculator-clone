let firstNumber;
let secondNumber;
let operator;
let numbersEl = Array.from(document.querySelectorAll(".calc-numbers"));
console.log(numbersEl);
let screenEl = document.querySelector(".screen");

numbersEl.forEach((number) => {
  number.addEventListener("click");
});

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(operator, firstNumber, secondNumber) {
  return operator(firstNumber, secondNumber);
}
