
const prompt = require("prompt-sync")();


function add(a, b) {
  if (isNaN(a) || isNaN(b)) throw new Error("Invalid input: Please enter numeric values.");
  return a + b;
}

function subtract(a, b) {
  if (isNaN(a) || isNaN(b)) throw new Error("Invalid input: Please enter numeric values.");
  return a - b;
}

function multiply(a, b) {
  if (isNaN(a) || isNaN(b)) throw new Error("Invalid input: Please enter numeric values.");
  return a * b;
}

function divide(a, b) {
  if (isNaN(a) || isNaN(b)) throw new Error("Invalid input: Please enter numeric values.");
  if (b === 0) throw new Error("Cannot divide by zero.");
  return a / b;
}

function puissance(a, b) {
  if (isNaN(a) || isNaN(b)) throw new Error("Invalid input: Please enter numeric values.");
  return a ** b;
}

function racineCarree(a) {
  if (isNaN(a)) throw new Error("Invalid input: Please enter numeric values.");
  if (a < 0) throw new Error("Cannot calculate the square root of a negative number.");
  return Math.sqrt(a);
}

function factorial(n) {
  if (isNaN(n)) throw new Error("Invalid input: Please enter numeric values.");
  if (n < 0) throw new Error("Cannot calculate the factorial of a negative number.");
  if (n === 0 || n === 1) return 1;
  let result = 1;
  for (let i = 2; i <= n; i++) result *= i;
  return result;
}


function menu() {
  console.log("\n=== Welcome to the Calculator! ===");
  console.log("1. Addition");
  console.log("2. Subtraction");
  console.log("3. Multiplication");
  console.log("4. Division");
  console.log("5. Power");
  console.log("6. Square Root");
  console.log("7. Factorial");
  console.log("8. Show Calculation History");
  console.log("9. Exit");
}

function main(history) {
  menu();
  const choice = prompt("Enter choice (1-9): ");
  let num1, num2, result;

  try {
    switch (choice) {
      case "1":
        num1 = parseFloat(prompt("Enter first number: "));
        num2 = parseFloat(prompt("Enter second number: "));
        result = add(num1, num2);
        console.log(`Result: ${result}`);
        history.push({ operation: "Addition", inputs: [num1, num2], result });
        break;

      case "2":
        num1 = parseFloat(prompt("Enter first number: "));
        num2 = parseFloat(prompt("Enter second number: "));
        result = subtract(num1, num2);
        console.log(`Result: ${result}`);
        history.push({ operation: "Subtraction", inputs: [num1, num2], result });
        break;

      case "3":
        num1 = parseFloat(prompt("Enter first number: "));
        num2 = parseFloat(prompt("Enter second number: "));
        result = multiply(num1, num2);
        console.log(`Result: ${result}`);
        history.push({ operation: "Multiplication", inputs: [num1, num2], result });
        break;

      case "4":
        num1 = parseFloat(prompt("Enter first number: "));
        num2 = parseFloat(prompt("Enter second number: "));
        result = divide(num1, num2);
        console.log(`Result: ${result}`);
        history.push({ operation: "Division", inputs: [num1, num2], result });
        break;

      case "5":
        num1 = parseFloat(prompt("Enter base number: "));
        num2 = parseFloat(prompt("Enter exponent number: "));
        result = puissance(num1, num2);
        console.log(`Result: ${result}`);
        history.push({ operation: "Power", inputs: [num1, num2], result });
        break;

      case "6":
        num1 = parseFloat(prompt("Enter number: "));
        result = racineCarree(num1);
        console.log(`Result: ${result}`);
        history.push({ operation: "Square Root", inputs: [num1], result });
        break;

      case "7":
        num1 = parseInt(prompt("Enter number to calculate factorial: "));
        result = factorial(num1);
        console.log(`Result: ${result}`);
        history.push({ operation: "Factorial", inputs: [num1], result });
        break;

      case "8":
        if (history.length === 0) {
          console.log("\nNo history yet.");
        } else {
          console.log("\n=== Calculation History ===");
          history.forEach((item, index) => {
            console.log(`${index + 1}. ${item.operation} (${item.inputs.join(", ")}) = ${item.result}`);
          });
          console.log("============================");
        }
        break;

      case "9":
        return false;

      default:
        console.log("Invalid choice. Please try again.");
    }
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
  return true; 
}

let history = [];
let running = true;

while (running) {
    console.log(history)
  running = main(history);
}

console.log("\nThank you for using the calculator. Goodbye!");
