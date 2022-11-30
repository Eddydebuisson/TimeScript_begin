import De from "./class/De";
import Gobelet from "./class/Gobelet";

const de:De = new De();

console.log(de.lancer());

const gobelet:Gobelet = new Gobelet();

console.log(gobelet.lancer(6))
console.log(gobelet.afficherScore())