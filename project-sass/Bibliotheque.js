const prompt = require("prompt-sync")();
const livre = [
  {
    Id_livre: 0,
    Titre: "exemple",
    Auteur: "auteur exemple",
    Année_de_publication: 2030,
    Disponible: true,
  },
  {
    Id_livre: 1,
    Titre: "test2",
    Auteur: "auteur exemple2",
    Année_de_publication: 2010,
    Disponible: false,
  },
  {
    Id_livre: 2,
    Titre: "test3",
    Auteur: "auteur exemple3",
    Année_de_publication: 2020,
    Disponible: true,
  },
];
let abonnes = [
  { id: 1, nom: "Dupont", prenom: "Alice", email: "alice@mail.com" },
];
let emprunts = [{ abonneId: 1, Id_livre: "123", dateEmprunt: "2025-09-22" }];
//Ajouter un livre
// function ajouterLivre() {
//   const Titre = prompt("Entrez le titre du livre: ");
//   const Auteur = prompt("Entrez l'auteur du livre: ");
//   const Année_de_publication = Number(
//     prompt("Entrez l'année de publication: ")
//   );
//   const DisponibleInput = prompt("Le livre est-il disponible? (oui/non): ");
//   const Disponible = DisponibleInput.toLowerCase() === "oui";
//   if (!Titre || !Auteur || !Année_de_publication || Disponible === undefined) {
//     console.log("Erreur: Tous les champs sont requis pour ajouter un livre.");
//     return;
//   }
//   const nouveauLivre = {
//     Id_livre: livre.length + 1,
//     Titre: Titre,
//     Auteur: Auteur,
//     Année_de_publication: Année_de_publication,
//     Disponible: Disponible,
//   };
//   livre.push(nouveauLivre);
//   console.log("Livre ajouté avec succès !");
// }
function ajouterLivre(Titre, Auteur, Année_de_publication, Disponible) {
  // if no params are passed, ask user manually
  if (!Titre || !Auteur || !Année_de_publication || Disponible === undefined) {
    Titre = prompt("Entrez le titre du livre: ");
    Auteur = prompt("Entrez l'auteur du livre: ");
    Année_de_publication = Number(prompt("Entrez l'année de publication: "));
    const dispoInput = prompt("Le livre est-il disponible? (oui/non): ");
    Disponible = dispoInput.toLowerCase() === "oui";
  }

  livre.push({ Id_livre:livre.length+1,Titre, Auteur, Année_de_publication, Disponible });
  console.log("Livre ajouté avec succès !");
}
//livresArray est un tableau d'objets livres
function plusieurLivre() {
  const livresArray = [];
  const nombreLivres = Number(
    prompt("Combien de livres voulez-vous ajouter? ")
  );
  
  for (let i = 0; i < nombreLivres; i++) {
    console.log(i,nombreLivres)
    const Titre = prompt("Entrez le titre du livre: ");
    const Auteur = prompt("Entrez l'auteur du livre: ");
    const Année_de_publication = Number(
      prompt("Entrez l'année de publication: ")
    );
    const DisponibleInput = prompt("Le livre est-il disponible? (oui/non): ");
    const Disponible = DisponibleInput.toLowerCase() === "oui";
    livresArray.push({ Titre, Auteur, Année_de_publication, Disponible });
  }
  for (let i = 0; i < livresArray.length; i++) {
    const livre = livresArray[i];
    ajouterLivre(
      livre.Titre,
      livre.Auteur,
      livre.Année_de_publication,
      livre.Disponible
    );
  }
}
//for testin
//Opérations sur les livres;
function affichageLivre() {
  for (let i = 0; i < livre.length; i++) {
    console.log(
      `${livre[i].Id_livre}: ${livre[i].Titre} par ${livre[i].Auteur} (${
        livre[i].Année_de_publication
      }) - Disponible: ${livre[i].Disponible ? "Oui" : "Non"}`
    );
  }
}

function trierLivresParTitre() {
  const ascendantInput = prompt(
    "Trier par titre en ordre ascendant? (oui/non): "
  );
  if (
    ascendantInput.toLowerCase() !== "oui" &&
    ascendantInput.toLowerCase() !== "non"
  ) {
    console.log("Entrée invalide. Veuillez entrer 'oui' ou 'non'.");
    return;
  }
  const ascendant = ascendantInput.toLowerCase() === "oui";
  for (let i = 0; i < livre.length - 1; i++) {
    for (let j = 0; j < livre.length - i - 1; j++) {
      if (ascendant) {
        if (livre[j].Titre > livre[j + 1].Titre) {
          let temp = livre[j];
          livre[j] = livre[j + 1];
          livre[j + 1] = temp;
        }
      } else {
        if (livre[j].Titre < livre[j + 1].Titre) {
          let temp = livre[j];
          livre[j] = livre[j + 1];
          livre[j + 1] = temp;
        }
      }
    }
  }
  // afficher le resultat
  console.log("Livres triés par titre:");
  affichageLivre();
}
//
// function trierLivresParAnnee() {
//   return livre.sort((a, b) => a.Année_de_publication - b.Année_de_publication);
// }
//trierLivresParAnnee low level without prebuild function
function trierLivresParAnnee() {
  for (let i = 0; i < livre.length - 1; i++) {
    for (let j = 0; j < livre.length - i - 1; j++) {
      if (livre[j].Année_de_publication > livre[j + 1].Année_de_publication) {
        //swap
        let temp = livre[j];
        livre[j] = livre[j + 1];
        livre[j + 1] = temp;
      }
    }
  }
    console.log("Livres triés par année de publication:");
    affichageLivre();
  
}
function afficherLivresDisponibles() {
  const res = livre.filter((livre) => livre.Disponible);
  for (let i = 0; i < res.length; i++) {
    console.log(
      `${res[i].Id_livre}: ${res[i].Titre} par ${res[i].Auteur} (${res[i].Année_de_publication})`
    );
  }
}
function rechercherLivreParId(Id_livre) {
    if(!Id_livre){
         Id_livre = Number(prompt("Entrez l'ID du livre à rechercher: "));
    }
  for (let i = 0; i < livre.length; i++) {
    if (livre[i].Id_livre === Id_livre) {
      console.log(
        `${livre[i].Id_livre}: ${livre[i].Titre} par ${livre[i].Auteur} (${livre[i].Année_de_publication}) - Disponible: ${livre[i].Disponible ? "Oui" : "Non"}`
      );
      return livre[i];
    }
  }
    console.log("Livre non trouvé.");
  return ;
}
//4. Gestion des abonnés
// ○ Ajouter un abonné (ID, Nom, Prénom, Email).
// ○ Afficher tous les abonnés.
function afficherAbonnes() {
  for (let i = 0; i < abonnes.length; i++) {
    console.log(
      `${abonnes[i].id}: ${abonnes[i].nom} ${abonnes[i].prenom} - Email: ${abonnes[i].email}`
    );
  }
}
function ajouterAbonne() {
  const nom = prompt("Entrez le nom de l'abonné: ");
  const prenom = prompt("Entrez le prénom de l'abonné: ");
  const email = prompt("Entrez l'email de l'abonné: ");
  if (!nom || !prenom || !email) {
    console.log("Erreur: Tous les champs sont requis pour ajouter un abonné.");
    return;
  }
  const nouvelAbonne = {
    id: abonnes.length + 1,
    nom: nom,
    prenom: prenom,
    email: email,
  };
  abonnes.push(nouvelAbonne);
  console.log("Abonné ajouté avec succès !");
}
function enregistrerEmprunt() {
  const abonneId = Number(prompt("Entrez l'ID de l'abonné: "));
  const Id_livre = Number(prompt("Entrez l'ID du livre: "));
  const dateEmprunt = prompt("Entrez la date d'emprunt (YYYY-MM-DD): ");
  const livreTrouve = rechercherLivreParId(Id_livre);
  if (livreTrouve === "Livre non trouvé") {
    console.log("Livre non trouvé.");
    return;
  }
  if (!livreTrouve.Disponible) {
    console.log("Le livre n'est pas disponible pour l'emprunt.");
    return;
  }
  livreTrouve.Disponible = false;
  emprunts.push({
    abonneId: abonneId,
    Id_livre: Id_livre,
    dateEmprunt: dateEmprunt,
  });
  console.log("Emprunt enregistré avec succès !");
}
function enregistrerRetour() {
  const Id_livre = Number(prompt("Entrez l'ID du livre à retourner: "));
  const livreTrouve = rechercherLivreParId(Id_livre);
  if (livreTrouve === "Livre non trouvé") {
    console.log("Livre non trouvé.");
    return;
  }
  livreTrouve.Disponible = true;
  //chercher et supprimer l'emprunt correspondant
  emprunts = emprunts.filter((emprunt) => emprunt.Id_livre !== Id_livre);
  console.log(emprunts);
  console.log("Retour enregistré avec succès !");
}
function afficherLivresEmpruntesParAbonne() {
  const abonneId = Number(prompt("Entrez l'ID de l'abonné: "));
  const livresEmpruntes = emprunts.filter(
    (emprunt) => emprunt.abonneId === abonneId
  );
  if (livresEmpruntes.length === 0) {
    console.log("Aucun livre emprunté par cet abonné.");
    return;
  }
  for (let i = 0; i < livresEmpruntes.length; i++) {
    const livreInfo = rechercherLivreParId(livresEmpruntes[i].Id_livre);
    console.log(
      `${livreInfo.Id_livre}: ${livreInfo.Titre} par ${livreInfo.Auteur} (${livreInfo.Année_de_publication})`
    );
  }
}
function menu() {
  console.log(`
0. Quitter
1. Afficher tous les livres
2. Ajouter un livre
3. ajouter plusiers livres
4.Tries les livres par titre
5. Trier les livres par année
6. Afficher les livres disponibles
7. Rechercher un livre
8. Ajouter un abonné
9. Afficher les abonnés
10. Enregistrer un emprunt
11. Enregistrer un retour
10.afficher Livres Empruntes Par Abonne
    `);
}
function menuBibliotheque() {
  let choice;
  menu();
  do {
    choice = prompt("Choisissez une option: ");
    switch (choice) {
      case "1":
        affichageLivre();
        break;
      case "2":
        ajouterLivre();
        break;
      case "3":
        plusieurLivre();
        break;
      case "4":
        trierLivresParTitre();
        break;
      case "5":
        trierLivresParAnnee();
        break;
      case "6":
        afficherLivresDisponibles();
        break;
      case "7":
        rechercherLivreParId();
        break;
      case "8":
        ajouterAbonne();
        break;
      case "9":
        afficherAbonnes();
        break;
      case "10":
        enregistrerEmprunt();
        break;
      case "11":
        enregistrerRetour();
        break;
      case "12":
        afficherLivresEmpruntesParAbonne();
        break;
      case "0":
        console.log("Au revoir !");
        break;
      default:
        console.log("Option invalide, veuillez réessayer.");
    }
  } while (choice !== "0");
}
menuBibliotheque();