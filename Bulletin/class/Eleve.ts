import Bulletin from "./Bulletin";
import Note from "./Note";

export default class Eleve {
  private _nom: string;
  private _prenom: string;
  private _bulletin: Bulletin;

  constructor(nom: string, prenom: string, bulletin: Bulletin) {
    this._nom = nom;
    this._prenom = prenom;
    this._bulletin = bulletin;
  }
    /**
     * Ajouter les nouvelles notes au bulletin
     * @param nouvelleNotes liste des nouvelle notes
     */
  public ajouterNotes(...nouvelleNotes:Note[]):void{
    nouvelleNotes.forEach ((note)=>{
        this._bulletin.ajouterNote(note);
    } )
  }
  /**
   * Afficher la moyenne de l'éleve dans la console.
   */
  public afficherMoyenne():void{
    console.log(`La moyenne de ${this._prenom} est de ${this._bulletin.calculerMoyenne()}`)
  }

  /**
   * Afficher les notes de l'éleve dans la console.
   */
  public afficherNotes():void{
    console.log(`Note de ${this._prenom} ${this._nom} : \r\n ${this._bulletin.afficherNotes()}`)
  }
}
