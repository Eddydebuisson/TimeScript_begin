class Employe {
  nom!: string;
  prenom!: string;
  salaire!: number;
  /**
   *
   * @param pourcent auguementation du salaire en pourcentage
   */
  augmentation = (pourcent: number): void => {
    if (pourcent < 0) {
        throw new Error('le pourcentage doit être positif')
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

const employe1: Employe = new Employe();
employe1.nom = "gotier";
employe1.prenom = "elisa";
employe1.salaire = 1000;

employe1.augmentation(-10);
