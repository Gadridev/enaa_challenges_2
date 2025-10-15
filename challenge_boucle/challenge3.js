//challenge 3:
const prompt = require("prompt-sync")();
//before that we shoud initialize sum and max
//while true loop to keep asking for numbers until 0 is entered
//we should check if the number is positive and less than 100
//we should calculate the sum and the maximum of the valid numbers entered
let sum = 0;
let max = 0;
while (true) {
  const num = Number(prompt("Enter a positive number less than 100 (0 to stop):"));
  if (num === 0) {
    break;
  }
  if (num < 0 || num > 100) {
    console.log("Invalid input, please enter a positive number less than 100.");
    
  }
  sum += num;
  if (num > max) {
    max = num;
  }
}
console.log("Sum of valid numbers:", sum);
if (max !== 0) {
  console.log("Maximum of valid numbers:", max);
} else {
  console.log("No valid numbers were entered.");
}