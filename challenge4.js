const prompt=require("prompt-sync")();
//challenge 4:
const num1=Number(prompt("Enter first number:"));
const num2=Number(prompt("Enter second number:"));
if(num1>num2){
    console.log(num1+" is greater than "+num2);
}else if(num1<num2){
    console.log(num1+" is less than "+num2);
}else{
    console.log("Both numbers are equal");
}