let firstNumber = ""; // Variable to store the first number
let operator = ""; // Variable to store the operator
let secondNumber = ""; // Variable to store the second number
let displayValue = document.getElementById("display");
let numberButtons = document.querySelectorAll(".calc-numbers");
let operatorButtons = document.querySelectorAll(".calc-operators");
let equalsButton = document.querySelector(".equals");
let clearButton = document.querySelector(".clear");
let clearEntryButton = document.querySelector(".clear-entry");

// Function to clear the most recent entry
function clearEntry() {
  // Remove the last character from the display value
  displayValue.textContent = displayValue.textContent.slice(0, -1);
}

// Add an event listener to the clear entry button
clearEntryButton.addEventListener("click", clearEntry);

// Function to clear the display
function clearDisplay() {
  console.log("clearDisplay called");
  displayValue.textContent = "";
}

// Add an event listener to the clear button
clearButton.addEventListener("click", clearDisplay);

// Function to set the operator when an operator button is clicked
// Function to set the operator when an operator button is clicked
// Function to set the operator when an operator button is clicked
// Function to set the operator when an operator button is clicked
function setOperator(op) {
  // Store the operator selected by the user
  operator = op.trim();

  // Store the current display value as the first number
  firstNumber = displayValue.textContent.split(" " + operator + " ")[0].trim();

  // Append the operator to the display
  displayValue.textContent += " " + operator + " ";
}

// Function to calculate the result when the equals button is clicked
function calculateResult() {
  // Store the current display value as the second number
  secondNumber = displayValue.textContent.split(" " + operator + " ")[1].trim();

  // Perform the calculation using operate function
  const result = operate(
    operator,
    parseFloat(firstNumber),
    parseFloat(secondNumber)
  );

  // Update the display with the result
  displayValue.textContent += " = " + result.toString();

  // Reset the variables for potential future calculations
  firstNumber = "";
  operator = "";
  secondNumber = "";
}
// Loop through each number button and add an event listener
numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log("button textContent is: " + button.textContent);
    appendToDisplay(button.textContent); // Pass the button's textContent to appendToDisplay
  });
});

// Loop through each operator button and add an event listener
operatorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log("Clicked operator button: " + button.textContent);
    setOperator(button.textContent); // Pass the button's textContent to setOperator
  });
});

// Add an event listener to the equals button
equalsButton.addEventListener("click", calculateResult);

function appendToDisplay(value) {
  console.log("Appending value: " + value);
  displayValue.textContent += value;
  // Update the actual display (assuming 'display' is the ID of your display input)
  // document.getElementById("display").value = displayValue;
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
// Addition function
function add(a, b) {
  return a + b;
}

// Subtraction function
function subtract(a, b) {
  return a - b;
}

// Multiplication function
function multiply(a, b) {
  return a * b;
}

// Division function
function divide(a, b) {
  if (b !== 0) {
    return a / b;
  } else {
    return "Cannot divide by zero!";
  }
}

console.log(add(5, 3)); // Output: 8
console.log(subtract(10, 4)); // Output: 6
console.log(multiply(7, 2)); // Output: 14
console.log(divide(20, 5)); // Output: 4
console.log(divide(10, 0)); // Output: "Cannot divide by zero!"
