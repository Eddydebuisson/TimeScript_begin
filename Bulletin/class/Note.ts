export default class Note {
    private _matiere:string ;
    private _valeur: number;

    constructor (matiere:string, valeur:number ){
        this._matiere = matiere;
        this._valeur = valeur;
    }

    get valeur(): number {
        return this._valeur;
    }

    get valeurSurVingt():string{
        return this.valeur +"/20"
    }

    get matiere():string {
        return this._matiere;
    }
    /**
     * Affiche la note sous la forme de chaine de caractère au format "matière Note/20"
     */
    public afficherNote():void{
        console.log(`${this._matiere} : ${this.valeurSurVingt}`)
    }
}