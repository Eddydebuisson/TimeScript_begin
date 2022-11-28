class Employe {
  private _nom: string;
  private _prenom: string;
  private _salaire: number;

  /**
   * constructeur de la classe de l'employé
   * @param nom nom de l'employé
   * @param prenom prenom de l'employé
   * @param salaire salire de l'elmployé
   */
  constructor(nom: string, prenom: string, salaire: number = 1000) {
    this._nom = nom;
    this._prenom = prenom;
    this._salaire = salaire;
  }

  get nom(): string {
    return this._nom;
  }

  get prenom(): string {
    return this._prenom;
  }

  get salaire(): number {
    return this._salaire;
  }

  set nom(nouveauNom: string) {
    if (nouveauNom.trim().length > 1) {
      this._nom = nouveauNom;
    } else {
      throw new Error("le nom est trop court  !");
    }
  }

  set prenom(nouveauPrenom: string) {
    if (nouveauPrenom.trim().length > 1) {
      this._prenom = nouveauPrenom;
    } else {
      throw new Error("le prénom est trop court  !");
    }
  }

  set salaire(nouveauSalaire:number){
    if ( nouveauSalaire > this._salaire){

        this.salaire = nouveauSalaire;
    }else {
        throw new Error("le nouveau salaire ne peut pas être plus bas que l'ancien")
    }
  }

  get nomComplet ():string {
    return `${this._prenom} ${this.prenom}`
  }


  /**
   *
   * @param pourcent auguementation du salaire en pourcentage
   */
  augmentation = (pourcent: number): void => {
    if (pourcent < 0) {
      throw new Error("le pourcentage doit être positif");
    } else {
      console.log(
        `le salaire de ${this.prenom} ${this.nom} va être augmenté de ${pourcent}%. Il est actuellement de ${this.salaire}`
      );
      const augmentation = (this.salaire * pourcent) / 100;
      console.log(`il/elle gagnera ${augmentation}$ supplémentaire.`);
      this.salaire += augmentation;
      console.log(`Son nouveau salire est de ${this.salaire}$`);
    }
  };
}

const employe1: Employe = new Employe("Pol", "Nareff");

employe1.augmentation(-10);
