// select calculator container
const calculatorContainer = document.getElementById("calculator_container");
const outputArea = document.getElementById("output_area");
calculatorContainer.addEventListener("click", (event) => {
  const userInputValue = event.target.innerText;
  if (isNaN(userInputValue)) {
    if (userInputValue === "AC") {
      outputArea.value = "";
    } else if (userInputValue === "+") {
      outputArea.value = outputArea.value + "+";
    } else if (userInputValue === "-") {
      outputArea.value = outputArea.value + "-";
    } else if (userInputValue === "/") {
      outputArea.value = outputArea.value + "/";
    } else if (userInputValue === "*") {
      outputArea.value = outputArea.value + "*";
    } else if (userInputValue === "%") {
      outputArea.value = outputArea.value + "%";
    } else if (userInputValue === "=") {
      if (outputArea.value === "") {
        outputArea.value = "";
      } else {
        outputArea.value = eval(outputArea.value);
      }
    }
  } else {
    outputArea.value = outputArea.value + userInputValue;
  }
});
