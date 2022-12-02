import De from "./class/De";
import Gobelet from "./class/Gobelet";
import Joueur from "./class/joueur";
import Partie from "./class/Partie";

const de: De = new De();

const gobelet: Gobelet = new Gobelet();

console.log("--------Test Partie---------");

const j1 = new Joueur("Kiyo");
const j2 = new Joueur("Audrey");
const j3 = new Joueur("Pierre");
const j4 = new Joueur("eddy");

const partie = new Partie(gobelet);

partie.game(999, 1, j1, j2, j3, j4);
