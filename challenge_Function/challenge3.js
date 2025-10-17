// challenge 3:
function compterOccurrences(tab, valeur){
    let count = 0;
    for(let i = 0; i < tab.length; i++){
        if(tab[i] === valeur){
            count++;
        }
    }
    return count;
}
console.log(compterOccurrences([1,2,35,23,5,1,9],1));
