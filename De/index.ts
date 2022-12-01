import De from "./class/De";
import Gobelet from "./class/Gobelet";
import Joueur from "./class/joueur";

const de:De = new De();

console.log(de.lancer());

const gobelet:Gobelet = new Gobelet();

console.log(gobelet.lancer(6))
console.log(gobelet.afficherScore());

const joueur = new Joueur("Audrey");

console.log(joueur.jouer(gobelet,99));