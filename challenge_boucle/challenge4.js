//challenge 4:
const prompt=require("prompt-sync")();
const num1=(prompt("Enter first number:"));
const str=num1.split("").de
function reverseArray(arr){
    let start=0;
    let end=arr.length-1;
    while(start<end){
        let temp=arr[start];
        arr[start]=arr[end];
        arr[end]=temp;
        start++;
        end--;
    }
    return arr; 
}
console.log(reverseArray(str).join(""));