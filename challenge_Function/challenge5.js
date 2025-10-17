// challenge 6:
function filtrerPairs(tab) {
    let pairs = [];
    for (let i = 0; i < tab.length; i++) {
        if (tab[i] % 2 === 0) {
            pairs.push(tab[i]);
        }
    }
    return pairs;
}
