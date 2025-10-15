//challenge 5:
const prompt=require("prompt-sync")();

let i=0;
let tab=[];
while(i<7){
    const num=Number(prompt("Enter your entier:"));
    tab.push(num);
    i++;
}
let max=tab[0];
let min=tab[0];
let j=0;
while(j<tab.length){
    if(tab[j]>max){
        max=tab[j];
    }
    if(tab[j]<min){
        min=tab[j];
    }
    j++;
}
console.log("max="+max);
console.log("min="+min);
