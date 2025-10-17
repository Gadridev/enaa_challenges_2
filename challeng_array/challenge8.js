// challenge 8:
const prompt = require("prompt-sync")();
const voyelles = ["a", "e", "i", "o", "u", "y"];
const char = prompt("Enter a character:");
let i = 0;
let count = 0;
const str = char.toLowerCase().split("");
while (i < str.length) {
  if (voyelles.includes(str[i])) {
    count++;
  }
  i++;
}
console.log(count);