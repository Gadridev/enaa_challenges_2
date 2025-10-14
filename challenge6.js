const prompt=require("prompt-sync")();
//challenge 6:
const anne=Number(prompt("Enter an year:"));
if((anne%4===0 && anne%100!==0) || (anne%400===0)){
    console.log(anne+" anne est bissextile");
}else{
    console.log(anne+"anne n'est pas bissextile");
}