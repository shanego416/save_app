const buttons = document.querySelectorAll(".btn");
const amountRemaining = document.querySelector("#amountRemaining");
const amountSaved = document.querySelector("#amountSaved");
const clearButton = document.getElementById("clearButton");

let buttonClicked = {};
let buttonNum = {};

amountSaved.textContent =
  localStorage.getItem("localStorageAmountSaved") || 0.0;
amountRemaining.textContent =
  localStorage.getItem("localStorageAmountRemaining") || 2000;

if (localStorage.getItem("tester_2")) {
  buttonClicked = JSON.parse(localStorage.getItem("Tester_2"));
}

console.log(buttonClicked);
clearButton.addEventListener("click", clearTable);

Array.from(buttons).forEach((element) => {
  if (buttonClicked[element.id]) {
    element.classList.toggle("active");
  }
  // event listeners
  element.addEventListener("click", paid);
  element.addEventListener("click", updateAmountRemaining);
});

// CHANGE THE LOOK OF THE BUTTON
function paid() {
  this.classList.toggle("active");
}

// UPDATE AMOUNT REMAINING
function updateAmountRemaining() {
  let newButtonNum = this.innerText.substring(1); // Could pass below
  let num = parseInt(newButtonNum);
  let amountRemainNum = parseInt(amountRemaining.textContent);
  let amountSavedNum = parseInt(amountSaved.textContent);

  if (buttonClicked[this.id] === true) {
    let remainNum = amountRemainNum + num;
    amountRemaining.textContent = remainNum;
    let savedNum = amountSavedNum - num;
    amountSaved.textContent = savedNum;
    buttonClicked[this.id] = false;
    console.log(1);
    localStorage.setItem("localStorageAmountSaved", amountSaved.textContent);
    localStorage.setItem(
      "localStorageAmountRemaining",
      amountRemaining.textContent
    );
  } else {
    let remainNum = amountRemainNum - num;
    amountRemaining.textContent = remainNum;
    let savedNum = amountSavedNum + num;
    amountSaved.textContent = savedNum;
    buttonClicked[this.id] = true;
    console.log(2);
    localStorage.setItem("localStorageAmountSaved", amountSaved.textContent);
    localStorage.setItem(
      "localStorageAmountRemaining",
      amountRemaining.textContent
    );
  }
  buttonNum[this.id] = num;

  const stringObj = JSON.stringify(buttonClicked);
  localStorage.setItem("Tester_2", stringObj);
  console.log(stringObj);
}

function clearTable() {
  buttons.forEach((button) => {
    button.classList.remove("active");
  });
  buttonClicked = {};
  localStorage.clear();
  amountSaved.textContent = "0.00";
  amountRemaining.textContent = "2000";
}
