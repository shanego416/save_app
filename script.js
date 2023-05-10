const buttons = document.getElementsByClassName("btn");
const amountRemaining = document.querySelector("#amountRemaining");
const amountSaved = document.querySelector("#amountSaved");

let buttonClicked = {};
let buttonNum = {};

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

  if (buttonClicked[this.id] === true) {
    let remainNum = amountRemainNum + num;
    amountRemaining.textContent = remainNum;
    buttonClicked[this.id] = false;
    console.log(1);
    console.log("Changed to false");
  } else {
    let remainNum = amountRemainNum - num;
    amountRemaining.textContent = remainNum;
    buttonClicked[this.id] = true;
    console.log(2);
    console.log("Changed to true");
  }
  buttonNum[this.id] = num;
}
