//challenge 1:
const prompt=require("prompt-sync")();
let tab=[];

while(tab.length<5)
{
    const n=Number(prompt("Enter a number:"));
    tab.push(n);
}
const sommeTableau=function(arr){

    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum;
}
console.log("La somme des nombres est :"+sommeTableau(tab));


