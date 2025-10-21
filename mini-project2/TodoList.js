// mini-project Todo-list about Taches
const prompt = require("prompt-sync")();
const taches = [
  {
    id: 1,
    titre: "Faire les courses",
    description: "Acheter du lait, du pain et des œufs",
    isDone: false,
  },
  {
    id: 2,
    titre: "Nettoyer la maison",
    description: "Passer l'aspirateur et faire la poussière",
    isDone: true,
  },
  {
    id: 3,
    titre: "Préparer le repas",
    description: "Cuisiner un plat sain pour le dîner",
    isDone: false,
  },
];
//Fonctions de gestion des tâches
//1:afficher les taches
function afficherLesTaches() {
  if (taches.length === 0) {
    console.log("Aucune tâche disponible.");
  }
  for (let i = 0; i < taches.length; i++) {
    console.log(
      `${taches[i].id}: ${taches[i].titre}-- Description :${
        taches[i].description
      } -- Statut: ${taches[i].isDone ? "Terminée" : "En attente"}`
    );
  }
}
//2:ajouter une tache
function ajouterTache(titre, description) {
  if (!titre || !description) {
    console.log(
      "Erreur: Le titre et la description sont requis pour ajouter une tâche."
    );
    return;
  }
  const nouvelleTache = {
    id: taches.length + 1,
    titre: titre,
    description: description,
    isDone: false,
  };
  taches.push(nouvelleTache);
  console.log("Tâche ajoutée avec succès !");
}
//methode 1:rechercher tache par titre 3
function rechercherTacheParTitre(titre) {
  let i = 0;
  while (i < taches.length) {
    if (taches[i].titre === titre) {
      return `${taches[i].id}: ${taches[i].titre} - ${
        taches[i].description
      } - Statut: ${taches[i].isDone ? "Terminée" : "En attente"}`;
    }
    i++;
  }
  return "Aucune tâche trouvée avec ce titre.";
}
function rechercherTacheParId(id) {
  let i = 0;
  while (i < taches.length) {
    if (taches[i].id === id) {
      return true;
    } 
    i++;
  }
  return false;
}
//4:modifier tache par id
function modifierTache(id, nouvelleDescription) {
  if (!nouvelleDescription) {
    console.log(
      "Erreur: La nouvelle description est requise pour modifier une tâche."
    );
    return;
  }
  const tache = taches.find((tache) => tache.id === id);
  console.log("id:", id === tache.id);
  if (tache) {
    tache.description = nouvelleDescription;
    console.log("Tâche modifiée avec succès.");
  }
  return `${tache.id}: ${tache.titre} - ${tache.description} - Statut: ${
    tache.isDone ? "Terminée" : "En attente"
  }`;
  //   }
}
//5:Delete Tache by id
//Delete Tache by id  Supprimer une tâche par son id.
function supprimerTache(id) {
  const index = taches.findIndex((tache) => tache.id === id);
  if (index !== -1) {
    taches.splice(index, 1);
    console.log("Tâche supprimée avec succès.");
  }
}
//6:Change status tache
function changeStatusTache(id) {
  const tache = taches.find((tache) => tache.id === id);
  if (tache) {
    tache.isDone = !tache.isDone;
  }
}
//7:Afficher les taches uniquement non terminées or terminées
function afficherTachesParStatut(isDone) {
  const tache = taches.filter((tache) => tache.isDone === isDone);
  if (tache.length === 0) {
    return "Aucune tâche trouvée avec ce statut.";
  }
  let resultat = "";
  for (let i = 0; i < tache.length; i++) {
    resultat += `${tache[i].id}: ${tache[i].titre} - ${
      tache[i].description
    } - Statut: ${tache[i].isDone ? "Terminée" : "En attente"}\n`;
  }
  return resultat;
}
function menu() {
  console.log("=== To-Do List ===");
  console.log("1. Afficher les tâches");
  console.log("2. Ajouter une tâche");
  console.log("3. Rechercher une tâche");
  console.log("4. Modifier une tâche");
  console.log("5. Supprimer une tâche");
  console.log("6. Marquer une tâche comme terminée");
  console.log("7. Afficher tâches terminées / en attente");
  console.log("8. Quitter");
}
function main() {
  let choice;
  menu();
  do {
    choice = prompt("Choisissez une option (1-8): ");
    switch (choice) {
      case "1":
        afficherLesTaches();
        break;
      case "2":
        const titre = prompt("Entrez le titre de la tâche : ");
        const description = prompt("Entrez la description de la tâche : ");
        ajouterTache(titre, description);
        break;
      case "3":
        const titreRecherche = prompt("Entrez le titre à rechercher : ");
        console.log(rechercherTacheParTitre(titreRecherche));
        break;
      case "4":
        let idModif = Number(prompt("Entrez l'id de la tâche à modifier : "));
         while (!rechercherTacheParId(idModif)) {
           console.log("id invalide,veuillez ressayer");
           idModif = Number(prompt("Entrez l'id de la tâche à modifier : "));
         }
        const nouvelleDescription = prompt("Entrez la nouvelle description : ");
        console.log(modifierTache(idModif, nouvelleDescription));
        break;
      case "5":
        const idSuppr = Number(
          prompt("Entrez l'id de la tâche à supprimer : ")
        );
        supprimerTache(idSuppr);
        break;
      case "6":
        const idStatus = Number(
          prompt("Entrez l'id de la tâche à changer le statut : ")
        );
        changeStatusTache(idStatus);
        break;
      case "7":
        const statut = prompt(
          "Afficher (1) Tâches terminées ou (2) Tâches en attente ? "
        );
        if (statut === "1") {
          console.log(afficherTachesParStatut(true));
        } else if (statut === "2") {
          console.log(afficherTachesParStatut(false));
        } else {
          console.log("Choix invalide.");
        }
        break;
      case "8":
        console.log("Au revoir !");
        return;
      default:
        console.log("Choix invalide.");
    }
  } while (choice != "8");
}
main();
