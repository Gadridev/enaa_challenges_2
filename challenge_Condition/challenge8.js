const prompt=require("prompt-sync")();
//challenge 8:
const feu=prompt("Enter the color of the traffic light (rouge, jaune, vert):").toLowerCase();
if(feu==="rouge"){
    console.log("Arrêt");
}else if(feu==="jaune"){
    console.log("Préparez-vous");
}else if(feu==="vert"){
    console.log("Allez");
}else{
    console.log("Couleur invalide");
}