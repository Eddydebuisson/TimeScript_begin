import De from "./class/De";
import Gobelet from "./class/Gobelet";
import Joueur from "./class/joueur";
import Partie from "./class/Partie";

const de: De = new De();

console.log(de.lancer());

const gobelet: Gobelet = new Gobelet();

console.log(gobelet.lancer(6));
console.log(gobelet.afficherScore());

console.log("--------Test Partie---------");

const j1 = new Joueur("Kiyo");
const j2 = new Joueur("Audrey");
const j3 = new Joueur("Pierre");
const j4 = new Joueur("eddy");

const partie = new Partie(gobelet);

partie.initialiserPartie(3, 3, j1, j2, j3, j4);

partie.lancerPartie();
