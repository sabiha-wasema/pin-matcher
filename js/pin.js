document.getElementById("generate-pin").addEventListener("click", function() {
  generatePin();
});

function generatePin() {
  const pin = getPin();
  document.getElementById("pin-number").value = pin;
}

function getPin() {
  const pin = Math.round(Math.random() * 10000);
  //   console.log(pinGenerate);
  const pinString = pin + "";
  //   console.log(pinString);
  if (pinString.length == 4) {
    // console.log(pin);
    return pin;
  } else {
    // console.log("invalid", pin);
    return getPin();
  }
}

document.getElementById("key-pad").addEventListener("click", function(e) {
  //   console.log("clicked");
  //   console.log(e.target.innerText);
  const number = e.target.innerText;

  const calInput = document.getElementById("calculator-field");
  const previousValue = calInput.value;
  //   console.log(previousValue);
  const newNumber = previousValue + number;
  //   console.log(newNumber);
  calInput.value = newNumber;
  if (isNaN(number)) {
    // console.log(number);
    if (number == "C") {
      calInput.value = "";
    }
  }
});
