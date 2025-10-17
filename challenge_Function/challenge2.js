// challenge 2:
const tab = [1, 2, 9, 4, 5];
function max_Tableau(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
max_Tableau(tab);
console.log("Le nombre maximum est :" + max_Tableau(tab));