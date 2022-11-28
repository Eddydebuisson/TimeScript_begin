abstract class Collaborateur {
  protected _nom: string;
  protected _prenom: string;

  constructor(nom: string, prenom: string) {
    this._nom = nom;
    this._prenom = prenom;
  }

  abstract travailler(): string;

}

class Salarie extends Collaborateur{

    private _salaire:number;

    constructor (nom:string, prenom:string,salaire:number){
        super(nom,prenom);
        this._salaire = salaire;
    }

    travailler():string{
        return `${this._prenom} ${this._nom} travaille comme un fou car il aimerait une auguementation`
    }
}

class Stagiaire extends Collaborateur{
    private _finContrat: Date;

    constructor (nom:string, prenom:string,finContrat:Date){
        super(nom,prenom);
        this._finContrat = finContrat;
    }

    get fin():string{
        return this._finContrat.toLocaleDateString();
    }
    
    prolonger(jours: number):void{
        this._finContrat.setDate(this._finContrat.getDate() + jours);
        console.log(`la date de fin de contrat a été prolongée jusqu'à ${this._finContrat}`)
    }

    
    travailler(): string {
        return `${this._prenom} ${this._nom} fais des photocopie et apporte le café :D`
    }
    
}

const employe0: Salarie = new Salarie("clette",'Lara',1000)
const stagiaire1: Stagiaire = new Stagiaire(" paltan","jay", new Date("2022/12/31"));