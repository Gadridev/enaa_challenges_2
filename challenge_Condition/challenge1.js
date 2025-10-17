const prompt=require("prompt-sync")();
//challenge 1:
const num=Number(prompt("Enter a number:"));
if(num%2===0){
    console.log("pair");
}else{
    console.log("impair");
}