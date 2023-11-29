let firstNumber;
let secondNumber;
let operator;
let numbersEl = Array.from(document.querySelectorAll(".calc-numbers"));
console.log(numbersEl);
let screenEl = document.querySelector(".screen");
let screenValue = "";
let equals = document.querySelector(".equals");
numbersEl.forEach((number) => {
  number.addEventListener("click", () => {
    screenEl.textContent += number.textContent;
    screenValue += number.textContent;
  });
});

// equals.addEventListener("click", operate());

function add(arr) {
  return arr.reduce((acc, current) => acc + current);
}

function subtract(arr) {
  return arr.reduce((acc, current) => acc - current);
}

function multiply(arr) {
  return arr.reduce((acc, current) => acc * current);
}

function divide(arr) {
  return arr.reduce((acc, current) => acc / current);
}

console.log(add([1, 2, 3, 4, 5])); // Should print 15
console.log(subtract([20, 5, 3])); // Should print 12
console.log(multiply([2, 3, 4])); // Should print 24
console.log(divide([100, 5, 2])); // Should print 10

function operate(firstNum, operatorr, secondNum) {
  const nums = [firstNum, secondNum];
  if (operatorr === "+") {
    return add(nums);
  } else if (operatorr === "-") {
    return subtract(nums);
  } else if (operatorr === "*") {
    return multiply(nums);
  } else if (operatorr === "/") {
    return divide(nums);
  }
}

console.log(operate(4, "+", 2));
//firstNumber = firstNum;
//   secondNumber = secondNum;

//   return operatorr(firstNum, secondNum);
// }
