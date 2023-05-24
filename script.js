const buttons = document.querySelectorAll(".btn");
const amountRemaining = document.querySelector("#amountRemaining");
const amountSaved = document.querySelector("#amountSaved");
const clearButton = document.getElementById("clearButton");

let buttonClicked = {};
let buttonNum = {};

if (localStorage.getItem("Tester") !== null) {
  amountSaved.textContent = localStorage.getItem("Tester");
} else {
  amountSaved.textContent = 0.0;
}

clearButton.addEventListener("click", clearTable);

// ASK COLLIN ABOUT the " => " OPERATOR
Array.from(buttons).forEach((element) => {
  element.addEventListener("click", paid);
  element.addEventListener("click", updateAmountRemaining);
});

// CHANGE THE LOOK OF THE BUTTON
function paid() {
  this.classList.toggle("active");
}

// UPDATE AMOUNT REMAINING
function updateAmountRemaining() {
  let newButtonNum = this.innerText.substring(1);
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
    localStorage.setItem("Tester", amountSaved.textContent);
  } else {
    let remainNum = amountRemainNum - num;
    amountRemaining.textContent = remainNum;
    let savedNum = amountSavedNum + num;
    amountSaved.textContent = savedNum;
    buttonClicked[this.id] = true;
    console.log(2);
    localStorage.setItem("Tester", amountSaved.textContent);
  }
  buttonNum[this.id] = num;
}

function clearTable() {
  buttons.forEach((button) => {
    button.classList.remove("active");
  });
  localStorage.clear();
  amountSaved.textContent = "0.00";
  amountRemaining.textContent = "2000";
}

// buttonClicked = false for all buttons when "clear" is clicked
// negaive number bug
