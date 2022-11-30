import Note from "./Note";

export default class Bulletin {
  private _notes: Note[];
  /**
   * ajoute une nouvelle note au carnet de notes
   * @param nouvelleNote la nouvelle note
   */
  private ajouterNote(nouvelleNote: Note) {
    if (nouvelleNote.valeur > 20 || nouvelleNote.valeur < 0) {
      throw new Error("la note est incorrecte ! !");
    } else {
      this._notes.push(nouvelleNote);
    }
  }

  /**
   * Calcule la moyenne des notes de l'eleve
   * @returns la moyenne avec deux decimal
   */
  public calculerMoyenne(): string {
    let somme: number = 0;
    this._notes.forEach((note) => {
      somme += note.valeur;
    });
    return (somme / this._notes.length).toFixed(2);
  }

  /**
   * Affiche toute les notes
   */
  public afficherNotes(): void {
    this._notes.forEach((note) => {
      note.afficherNote();
    });
  }
}
