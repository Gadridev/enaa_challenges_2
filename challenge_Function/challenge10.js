//challenge 10:
function supprimerDoublons(tab) {
    let resultat = [];
    for (let i = 0; i < tab.length; i++) {
        if (!resultat.includes(tab[i])) {
            resultat.push(tab[i]);
        }
    }
    return resultat;
}