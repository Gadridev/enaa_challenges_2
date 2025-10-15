//challenge7 :
const prompt = require("prompt-sync")();
let sum = 0;
for (let i = 0; i < 10; i++) {
  const num = Number(prompt("Enter a number:"));
  if (num >= 0) {
    sum += num;
  }
}
console.log("La somme des nombres valides est :" + sum);
