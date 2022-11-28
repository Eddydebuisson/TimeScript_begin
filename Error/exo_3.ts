class Chatte {
  private _nom: string;
  private _race: string;
  private _age: number;
  private _poid: number;

  get nom(): string {
    return this._nom;
  }

  get race(): string {
    return this._race;
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

  set race(nouvelleRace) {
    this._race = nouvelleRace;
  }

  set age(nouvelleAge) {
    this._age = nouvelleAge;
  }

  set poid(nouveauPoid) {
    this._poid = nouveauPoid;
  }

  /**
   * retourne les attributs de la classe Chatte
   */
  getChat = () => {
    console.log(
      `Mon super chat s'appelle ${this.nom}, c'est un ${this.race}, son age est de  ${this.age}, son poids est de ${this.poid} kg `
    );
  };
}
const tao2: Chatte = new Chatte();
tao2.nom = "Tao";
tao2.race = "chat";
tao2.age = 7;
tao2.poid = 5;

tao2.getChat();
