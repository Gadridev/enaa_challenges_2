//challenge9:
function fusionner(tab1, tab2) {
    let i;
    i=0;
    while(tab1[i]){
        i++;
    }
    let j=0;
    while(tab2[j]){
        tab1[i]=tab2[j];
        i++;
        j++;
    }
    return tab1;
}
console.log(fusionner([1,2,3],[4,5,6]));