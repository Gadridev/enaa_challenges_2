//challenge 3:
const prompt=require("prompt-sync")();
let tab=[];
while(tab.length<8){
    const num=Number(prompt("Enter a number:"));
    tab.push(num);
}
const recherch_num=Number(prompt("Enter a number to search:"));
function searchNumbers(arr,number){
    let i =0;
    while(i<arr.length){
        if(arr[i]===number){
            return true;
        }
        i++;
    }
    return false;
}
function searchNumber(arr,number){
    console.log(searchNumbers(arr,number))
    if(searchNumbers(arr,number)){
        console.log(number+" est trouvé dans le tableau");
    }else{
        console.log(number+" n'est pas trouvé dans le tableau");
    }
   
}
searchNumber(tab,recherch_num);