const prompt = require("prompt-sync")();
const num = Number(prompt("Enter the number of levels for the pyramid:"));
function pyramidStar(n) {
  for (let i = 0; i < n ; i++) {
    let str = '';
    //i=0 line 1
    for (let j = 1; j <= n - i; j++) {
      str =str + ' ';//str=" "=5="     "
    }
    for (let k = 1; k <= 2 * i + 1; k++) {
      str = str + "*";
    }
    console.log(str)
  }
}
pyramidStar(num);   