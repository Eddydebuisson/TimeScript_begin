/**
 * calcule la moyenne
 * @param notes la liste des notes
 * @returns la moyenne
 */
let calculMoyenne = (notes: number[]): number => {
  let sommeDesnotes = 0;
  notes.forEach((note) => {
    if (verifierNote(note)) {
      sommeDesnotes += note;
    } else {
      console.log(`La note ${note} a été ignorée car non valide ! Désolé ♥`);
    }
  });

  return sommeDesnotes / notes.length;
};

/**
 * Verifie si la note est bien comprise entre 0 et 20
 * @param note la note a verifier
 * @returns return false si la note est inférieure à zero ou supérieure a 20
 */
let verifierNote = (note: number): boolean => {
  if (note < 0 || note > 20) {
    return false;
  } else {
    return true;
  }
};

/**
 *  return la mention de l'élève et sa moyenne
 * @param eleve le nom de l'élève
 * @param notes la liste des notes de l'élève
 * @returns la mention de l'élève
 */
let moyenneDeLeleve = (eleve: string, ...notes: number[]): string => {
  let moyenne: number = calculMoyenne(notes);
  if (moyenne < 5) {
    return `Catastrophique ${eleve} tu as ${moyenne} de moyenne`;
  }
  if (moyenne < 11) {
    return `Insuffisant ${eleve} tu as ${moyenne} de moyenne`;
  }
  if (moyenne < 15) {
    return `Passable ${eleve} tu as ${moyenne} de moyenne`;
  }
  if (moyenne < 19) {
    return `Bien ${eleve} tu as ${moyenne} de moyenne`;
  }
  if (moyenne < 21) {
    return `Très bien ${eleve} tu as ${moyenne} de moyenne`;
  }

  return "Note non valide";
};

console.log(moyenneDeLeleve("Audrey", 20, 20, 20, 20, 20, 20, 20, 20));
