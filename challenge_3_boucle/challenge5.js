//challenge5
const prompt=require("prompt-sync")();
const n=Number(prompt("Enter your n:"));
let i=0;
while (i<=n) {
    if(i%2==0){
        console.log(i);
    }
    i++;
}
