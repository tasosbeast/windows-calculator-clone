const display = document.getElementById("display");
const numberButtons = document.querySelectorAll(".calc-numbers");
const operatorButtons = document.querySelectorAll(".calc-operators");
const equalsButton = document.querySelector(".equals");
const clearButton = document.querySelector(".clear");
const clearEntryButton = document.querySelector(".clear-entry");
const percentButton = document.querySelector(".percentage-btn");
const decimalButton = document.querySelector(".decimal");

let firstNumber = "";
let operator = "";
let secondNumber = "";

function clearDisplay() {
  display.textContent = "";
  resetVariables();
}

function resetVariables() {
  firstNumber = "";
  operator = "";
  secondNumber = "";
}

function appendToDisplay(value) {
  display.textContent += value;
}

function addDecimalPoint() {
  const [firstPart, secondPart] = display.textContent.split(operator);

  if (operator) {
    if (!secondPart || !secondPart.includes(".")) {
      display.textContent += ".";
    }
  } else {
    if (!firstPart.includes(".")) {
      display.textContent += ".";
    }
  }
}

function calculatePercentage() {
  const currentValue = parseFloat(display.textContent);
  const percentage = currentValue / 100;
  display.textContent = percentage.toString();
}

function clearEntry() {
  display.textContent = display.textContent.slice(0, -1);
}

function setOperator(op) {
  operator = op.trim();

  firstNumber = display.textContent.split(" " + operator + " ")[0].trim();
  display.textContent += " " + operator + " ";
}

function calculateResult() {
  secondNumber = parseFloat(display.textContent.split(" " + operator + " ")[1]);

  const result = operate(operator, parseFloat(firstNumber), secondNumber);
  display.textContent = result.toString();

  // Store the result in firstNumber for the next operation
  firstNumber = result.toString();
}

function operate(operator, num1, num2) {
  if (operator === "+") {
    return add(num1, num2);
  } else if (operator === "-") {
    return subtract(num1, num2);
  } else if (operator === "*" || operator === "x") {
    return multiply(num1, num2);
  } else if (operator === "/") {
    if (num2 !== 0) {
      return divide(num1, num2);
    } else {
      alert("Error: Division by zero is not allowed.");
      return 0;
    }
  } else {
    alert("Invalid operator");
    return 0;
  }
}

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
  if (b !== 0) {
    return a / b;
  } else {
    return "Cannot divide by zero!";
  }
}

// Add event listeners
decimalButton.addEventListener("click", addDecimalPoint);
percentButton.addEventListener("click", calculatePercentage);
clearEntryButton.addEventListener("click", clearEntry);
clearButton.addEventListener("click", clearDisplay);
numberButtons.forEach((button) =>
  button.addEventListener("click", () => appendToDisplay(button.textContent))
);
operatorButtons.forEach((button) =>
  button.addEventListener("click", () => setOperator(button.textContent))
);
equalsButton.addEventListener("click", calculateResult);
