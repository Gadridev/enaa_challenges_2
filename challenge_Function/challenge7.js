// challenge 7:
function moyenne(tab) {
    let somme = 0;
    for (let i = 0; i < tab.length; i++) {
        somme += tab[i];
    }
    return somme / tab.length;
}