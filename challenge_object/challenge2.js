//challenge_object/challenge2.js
//1
const etudiant = {
  nom: "mohamed",
  age: 22,
  sePresenter:function(){
    console.log(`Je m'appelle ${this.nom} et j'ai ${this.age} ans.`);
  },
};
//2
const person = { nom: "sara", age: 24 };
for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}
//3
const classe = {
  etudiants: ["ali", "sara", "yassine"],
  afficherEtudiants: function () {
    this.etudiants.forEach((value, index) => {
      console.log(`Etudiant ${index + 1}: ${value}`);
    });
  },
};
classe.afficherEtudiants();
//4
// Dans le tableau livres, écris une fonction trouverLivre(titre) qui retourne
// l’objet correspondant.
const livre = [
  {
    titre: "le roi",
    auteur: "james madisson",
    anne: 2020,
  },
   {
    titre: "chess",
    auteur: "matuis cunha",
    anne: 2023,
  },
   {
    titre: "the witcher",
    auteur: "andrzej sapkowski",
    anne: 2018
  },
];
function trouverLivre(titre) {
    for (let i = 0; i < livre.length; i++) {
        if (livre[i].titre === titre) {
            return livre[i];
        }
    }
    return "Livre non trouvé";
}
for (let i = 0; i < livre.length; i++) {
  console.log(`Titre: ${livre[i].titre }`);
}
console.log("checking",trouverLivre("chess"));
