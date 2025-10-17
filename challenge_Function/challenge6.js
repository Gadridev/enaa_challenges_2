// challenge 6:
function produitTableau(tab) {
    let produit = 1;
    for (let i = 0; i < tab.length; i++) {
        produit *= tab[i];
    }
    return produit;
}
