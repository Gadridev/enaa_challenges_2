//challenge 4:
const prompt=require("prompt-sync")();
let tab=[];
let i =0;
while (i<3) {
    const str=(prompt("Enter un chaine the charactere:"));
    tab.push(str);
    i++;
}
const str_rech=(prompt("Enter a charactere to search:"));
function searchString(arr,str){
    let i =0;
    while(i<arr.length){
        if(arr[i]===str){
            console.log(`La chaîne ${str} a été trouvée à la position ${i}.`)
            return;
        }
        i++;
    }
    console.log(`La chaîne ${str} n'est pas trouvée.`)
}
searchString(tab,str_rech)
