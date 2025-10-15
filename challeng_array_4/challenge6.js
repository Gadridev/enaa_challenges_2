//challenge 6:
const prompt = require("prompt-sync")();
let tab = [];
let i = 0;
while (i < 5) {
  const num = Number(prompt("Enter your entier:"));
  tab.push(num);
  i++;
}
let j = 0;
while (j < tab.length) {
  tab[j] *= tab[j];
  console.log(tab[j]);
  j++;
}
