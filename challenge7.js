const prompt=require("prompt-sync")();
//challenge 7
const mode_pass=Number(prompt("Enter the mode pass:"));//brfhj242342
const num=mode_pass.toString().length;
if(num<6){
    console.log("faible");
}else if(num>=6 ){
    console.log("moyen");
}else
    {
    console.log("fort");
}
