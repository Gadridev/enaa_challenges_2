const prompt = require("prompt-sync")();
//challenge 10:
const nom = prompt("Enter your name:");
const mode_pass = Number(prompt("Enter the mode pass:"));
if (nom === "admin" && mode_pass === 1234) {
  console.log("Bienvenue admin");
} else if (nom === "admin" && mode_pass !== 1234) {
  console.log("Mot de passe incorrect");
} else {
  console.log("Utilisateur introuvable");
}