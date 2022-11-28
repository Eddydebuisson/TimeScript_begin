class Employe {
  private nom: string;
  private prenom: string;
  private salaire: number;

  /**
   * constructeur de la classe de l'employé
   * @param nom nom de l'employé
   * @param prenom prenom de l'employé
   * @param salaire salire de l'elmployé
   */
  constructor(nom: string, prenom: string, salaire: number=1000) {
    this.nom = nom;
    this.prenom = prenom;
    this.salaire = salaire;
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
