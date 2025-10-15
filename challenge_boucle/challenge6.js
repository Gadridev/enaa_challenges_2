//challenge6:
const prompt=require("prompt-sync")();
const base=Number(prompt("Enter the base:"));
const exponent=Number(prompt("Enter the exponent:"));
let result=1;
for(let i=0;i<exponent;i++){
    result*=base;
}
console.log(base+"^"+exponent+"="+result);