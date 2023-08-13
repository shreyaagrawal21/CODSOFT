let firstNumber = "";
let secondNumber = "";
let operator = "";
let result = "";

function clearDisplay() {
  firstNumber = "";
  secondNumber = "";
  operator = "";
  result = "";
  document.querySelector(".display").value = "";
}

function addNumbers() {
  result = parseFloat(firstNumber) + parseFloat(secondNumber);
  document.querySelector(".display").value = result;
}

function subtractNumbers() {
  result = parseFloat(firstNumber) - parseFloat(secondNumber);
  document.querySelector(".display").value = result;
}

function multiplyNumbers() {
  result = parseFloat(firstNumber) * parseFloat(secondNumber);
  document.querySelector(".display").value = result;
}

function divideNumbers() {
  result = parseFloat(firstNumber) / parseFloat(secondNumber);
  document.querySelector(".display").value = result;
}

document.querySelector(".clr-btn").addEventListener("click", clearDisplay);

document.querySelectorAll(".btn-black").forEach((button) => {
  button.addEventListener("click", () => {
    if (operator === "") {
      firstNumber += button.dataset.num;
    } else {
      secondNumber += button.dataset.num;
    }
    document.querySelector(".display").value = firstNumber + operator + secondNumber;
  });
});

document.querySelectorAll(".btn-blck").forEach((button) => {
  button.addEventListener("click", () => {
    operator = button.dataset.num;
    secondNumber = "";
    document.querySelector(".display").value = firstNumber + operator + "";
  });
});

document.querySelector(".equal-btn-orange").addEventListener("click", () => {
  switch (operator) {
    case "+":
      addNumbers();
      break;
    case "-":
      subtractNumbers();
      break;
    case "*":
      multiplyNumbers();
      break;
    case "/":
      divideNumbers();
      break;
  }
});

