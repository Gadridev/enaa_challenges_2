const prompt=require("prompt-sync")();
//challenge 3
const age=Number(prompt("Enter your age:"));
if(age>=18){
    console.log("Éligibldeux e au vote");
}else{
    console.log("Non éligible");
}