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
