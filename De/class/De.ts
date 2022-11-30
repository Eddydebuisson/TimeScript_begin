export default class De {
    public _valeur:number;

    constructor( valeur:number=0){
        this._valeur = valeur;
    }

    public lancer() {
        return this._valeur = Math.floor(Math.random() * 6)+1;
    }
}