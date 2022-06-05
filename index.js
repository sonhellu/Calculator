let detailDisplay = document.getElementById("detailDisplay");
let display = document.getElementById("display");

let buttons = Array.from(document.getElementsByClassName("btn"));
// console.log(buttons);
buttons.map((btn) => {
  //   console.log(btn);
  btn.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "C":
        display.innerText = "";
        break;
      case "←":
        if (display.innerText && display.innerText !== "Lỗi!") {
          display.innerText = display.innerText.slice(0, -1);
        } else if (display.innerText === "Lỗi!") {
          display.innerText = "";
        }
        break;
      case "%":
        if (display.innerText) {
          display.innerText = display.innerText / 100;
        }
        break;
      case "+/-":
        if (display.innerText < 0) {
          display.innerText = -display.innerText;
        } else {
          display.innerText = -display.innerText;
        }
        break;
      case "=":
        if (display.innerText === "") {
          display.innerText = 0;
        } else {
          try {
            display.innerText = eval(display.innerText);
          } catch {
            display.innerText = "Lỗi!";
          }
        }
        break;
      default:
        display.innerText += e.target.innerText;
    }
  });
});

buttons.map((btn) => {
  //   console.log(btn);
  btn.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "C":
        detailDisplay.innerText = "";
        break;
      case "←":
        if (display.innerText === "") {
          detailDisplay.innerText = "";
        }
        break;
      case "+/-":
        if (detailDisplay.innerText < 0) {
          detailDisplay.innerText = -detailDisplay.innerText;
        } else {
          detailDisplay.innerText = -detailDisplay.innerText;
        }
        break;
      default:
        detailDisplay.innerText += e.target.innerText;
    }
  });
});
