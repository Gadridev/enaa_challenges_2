//challenge 1:
const prompt=require("prompt-sync")();
let arr=[];
while(arr.length<5){
    const num=Number(prompt("Enter a number:"));
    arr.push(num);
}
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
console.log(reverseArray(arr));