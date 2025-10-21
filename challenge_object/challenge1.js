// challenge_object/challenge1.js
const voiture = {
  marque: "Toyota",
  modele: "Corolla",
  annee: 2020,
};
console.log(voiture); 
console.log(voiture.marque); // Affiche "Toyota"
console.log(voiture.annee); // Affiche 2020

voiture.annee = 2021;
console.log(voiture); // Affiche 2021
// Ajout d'une nouvelle propriété
voiture.couleur = "Rouge";
console.log(voiture);

delete voiture.modele;
console.log(voiture);