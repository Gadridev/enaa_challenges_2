//challenge 2:
const prompt = require("prompt-sync")();
let tab=[];
let sum=0;
while(tab.length<10){
    const num=Number(prompt("Enter a number:"));
    tab.push(num);
    //first method
    sum+=num;
}
console.log(sum)
//second method
const sum_tab=tab.reduce((acc,cur)=>acc+cur,0);
console.log("La somme des nombres est :"+sum_tab);
 const avg=sum_tab/tab.length;
 console.log("La moyenne des nombres est :"+avg);