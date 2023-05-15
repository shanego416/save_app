const buttons = document.querySelectorAll(".btn");
const amountRemaining = document.querySelector("#amountRemaining");
const amountSaved = document.querySelector("#amountSaved");

let buttonClicked = {};
let buttonNum = {};

if (localStorage.getItem("Tester") !== null) {
  amountSaved.textContent = localStorage.getItem("Tester");
} else {
  amountSaved.textContent = "0.00";
}

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

// UPDATE AMOUNT SAVED
//localStorage.clear();
