//challenge 2:
const prompt = require("prompt-sync")();
const num = Number(prompt("Enter a number:"));
//tracking if the number is prime
//num=7
//num=7/2
let flage = true;
if (num == 0 || num == 1) {
  flage = false;
} else {
  for (let i = 2; i <= num / 2; i++) {
    if (num % i === 0) {
      flage = false;
      break;
    }
  }
}
if (flage) {
  console.log(num + " est un nombre premier");
} else {
  console.log(num + " n'est pas un nombre premier");
}
