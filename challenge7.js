const prompt=require("prompt-sync")();
//challenge 7
const mode_pass=Number(prompt("Enter the mode pass:"));
if(mode_pass<6){
    console.log("faible");
}else if(mode_pass>=6 ){
    console.log("moyen");
}else{
    console.log("fort");
}
