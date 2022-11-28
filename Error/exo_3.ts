abstract class Chatte {
  protected _nom: string;
  protected _age: number;
  protected _poid: number;

  get nom(): string {
    return this._nom;
  }

  get age(): number {
    return this._age;
  }

  get poid(): number {
    return this._poid;
  }

  set nom(nouveauNom) {
    this._nom = nouveauNom;
  }

  set age(nouvelleAge) {
    this._age = nouvelleAge;
  }

  set poid(nouveauPoid) {
    this._poid = nouveauPoid;
  }

  constructor(nom:string, age:number, poid:number){
    this._nom= nom;
    this._age =age;
    this._poid =poid;
  }

  /**
   * retourne les attributs de la classe Chatte
   */
  getChat = () => {
    console.log(
      `Mon super chat s'appelle ${this.nom}, son age est de  ${this.age}, son poids est de ${this.poid} kg `
    );
  };
}

class Europeen extends Chatte{
    private _surnoms:string[];
    private _origne:string="Europe";

    constructor(nom:string, age:number, poid:number, surnom:string[],origin:string){
        super(nom, age, poid);
        this._surnoms=surnom;
        this._origne = origin;
    }

    get surnoms():string[]{
        return this._surnoms;
    }
    set setSurnoms(nouveauSurnoms:string[]){
        this._surnoms =nouveauSurnoms;
    }

    getChat = () => {
        console.log(
          `Mon super chat s'appelle ${this.nom}, son age est de  ${this.age}, son poids est de ${this.poid} kg, il est d'origine ${this._origne} et ses surnoms sont : ${this._surnoms.join(", ")} `
        );
      };

}

const tao3 = new Europeen("Tao",7,6,["gros sac", "boule de poils"],"France");

tao3.getChat()
