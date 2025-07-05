const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

let operation = null;
let num1 = "";
let num2 = "";
let result = 0;
display.textContent = "";
for (const button of buttons) {
    button.addEventListener("click", () => {

        if (button.className == "number" && operation == null) {
             num1 += button.id[1];
             display.textContent = num1;
        }
        else if (button.className == "number" && operation != null) {
            if (num1 == "")
                num1 = result;
            num2 += button.id[1];
            display.textContent = num2;
        }

        else if (button.id == "clear") {
            display.textContent = "";
            num1 = "";
            num2 = "";
            result = 0;
        }

        else if (button.className == "operation" && num1 != "") {
            display.textContent = button.id;
            operation = button.id;
        }

        else if (button.id == "equal") {
            if (operation == "-") {
                result = num1 - num2;
            }
            else if (operation == "+") {
                result = +num1 + +num2;
            }
            else if (operation == "*") {
                result = num1 * num2;
            }
            else if (operation = "/") {
                result = num1 / num2;
            }
            if (result % 1 !== 0) 
                display.textContent = result.toFixed(2);
            else 
                display.textContent = result;
            operation = null;
            num1 = "";
            num2 = "";
        }
    })
}