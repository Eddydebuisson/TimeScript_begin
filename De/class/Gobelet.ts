import De from "./De";

export default class Gobelet {
    public _valeur:number= 0;

    public lancer(nombreDe:number):number{
        let somme:number =0;
        const de:De = new De();
        for (let index = 0; index < nombreDe; index++) {
            somme += de.lancer();
            
        }

        return this._valeur = somme;
    }

    public afficherScore(){
      return  `Le score du lance est de ${this._valeur}`
    }
}