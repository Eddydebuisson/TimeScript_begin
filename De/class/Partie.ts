import Gobelet from "./Gobelet";
import Joueur from "./joueur";

export default class Partie {
   public _nombreTours: number = 0;
   public _nombreJoueurs: Joueur[] = [];
   public _gobelet: Gobelet;
   public _nombreDe: number=0;

   constructor (gobelet:Gobelet){
    this._gobelet = gobelet;
   }
   




    initialiserPartie(nombreTours:number,nombreDe:number,...joueurs:Joueur[]) {
        this._nombreJoueurs = joueurs;
        this._nombreTours = nombreTours;
        this._nombreDe = nombreDe;
    }

    lancerPartie(){
        for (let tour = 0; tour < this._nombreTours; tour++) {
            console.log(`--------------Tour${tour}----------------------`)
            this._nombreJoueurs.forEach(joueur => {
                joueur.jouer(this._gobelet,this._nombreDe);
                console.log(joueur.afficherScore());
            });
            this.afficherGagnant();
            console.log(`--------------Fin du Tour${tour}-------------------------`)
            
        }
    }
    
    afficherGagnant(){
        let gagnant!:Joueur;
        let maxScore:number = 0;
        this._nombreJoueurs.forEach(joueur => {
            if (maxScore < joueur._score){
                maxScore = joueur._score;
                gagnant = joueur;
            }
        });

        console.log(`Le gagnant de ce tour est ${gagnant._nom}`)
    }
}