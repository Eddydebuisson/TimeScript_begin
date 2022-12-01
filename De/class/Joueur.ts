import Gobelet from "./Gobelet";

export default class Joueur {
    public _nom:string;
    public _score:number=0;
    public _nombreDeTourGagner:number =0;

    constructor(nom:string){
        this._nom = nom;
    }

    public jouer(gobelet:Gobelet,nombreDe:number){  
        return this._score = gobelet.lancer(nombreDe);
    }

    public afficherScore():string{
        return `le joueur ${this._nom} a fait un score de ${this._score} `
    }


}