const buttons = document.getElementsByClassName("btn");
const amountRemaining = document.querySelector("#amountRemaining");
const amountSaved = document.querySelector("#amountSaved");

let amountChange = false;

// ASK COLLIN ABOUT the " => " OPERATOR
Array.from(buttons).forEach((element) => {
  element.addEventListener("click", paid);
  element.addEventListener("click", subtract);
  element.addEventListener("click", add);
});

// CHANGE THE LOOK OF THE BUTTON
function paid() {
  this.classList.toggle("active");
}

// SUBTRACT AMOUNT FROM AMOUNT REMAINING
function subtract() {
  let buttonNum = this.innerText.substring(1);
  let num = parseInt(buttonNum);
  let amountRemainNum = parseInt(amountRemaining.textContent);
  let remainNum = amountRemainNum - num;
  amountRemaining.textContent = remainNum;
}

// ADD AMOUNT TO AMOUNT SAVED
function add() {
  let buttonNum = this.innerText.substring(1);
  let num = parseInt(buttonNum);
  let amountSavedNum = parseInt(amountSaved.textContent);
  let savedNum = amountSavedNum + num;
  amountSaved.textContent = savedNum;

  console.log(num);
}
