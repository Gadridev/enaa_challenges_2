const prompt=require("prompt-sync")();
//challenge 2:
const num=Number(prompt("Enter a number:"));
if(num>0){
    console.log("positif");
}else if(num<0){
    console.log("negatif");
}else{
    console.log("zero");
}