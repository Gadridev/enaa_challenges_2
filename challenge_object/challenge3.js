//challenge_object/challenge3.js
//1
const entreprise = {
  address: { rue: "atlas 2", ville: "Beni mellal", codePostal: 23000 },
};
console.log(entreprise.address.ville);
//2
const produits = [
  { nom: "ordinateur", prix: 25000, quantite: 4 },
  { nom: "souris", prix: 150, quantite: 10 },
];
const res = produits.forEach((item, index) => item.prix * item.quantite);
console.log(res);
//3
class Animal {
  constructor(nom, type) {
    this.nom = nom;
    this.type = type;
  }
  parler() {
    console.log(`Le ${this.type} nommé ${this.nom} fait du bruit.`);
  }
}
const animal1 = new Animal("Rex", "Chien");
animal1.parler();
// 4.
const employes = [
  { nom: "Ali", salaire: 2500 },
  { nom: "Sara", salaire: 3500 },
  { nom: "Yassine", salaire: 4000 },
];
for (let i = 0; i < employes.length; i++) {
  if (employes[i].salaire > 3000) {
    console.log(`Employé: ${employes[i].nom}, Salaire: ${employes[i].salaire}`);
  }
}
//5
function cloner(obj) {
  return obj;
}
function cloner(obj) {
  return { ...obj };
}
console.log(cloner({ nom: "test", age: 30 }));
