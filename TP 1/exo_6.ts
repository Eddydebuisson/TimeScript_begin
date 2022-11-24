/**
 * Calcule et returne la moyenne des notes 
 * @param notes 
 * @returns 
 */
let calculMoyenne = (notes: number[]): number => {
    let sommeDesnotes = 0;
    notes.forEach(note => {
        sommeDesnotes += note ;
    });


    return sommeDesnotes/notes.length;
}


/**
 *  return la mention de l'élève et sa moyenne
 * @param eleve 
 * @param notes 
 * @returns 
 */
let moyenneDeLeleve =(eleve: string, ...notes: number[]):string => {
    let moyenne:number  = calculMoyenne(notes);
    if(moyenne < 5){
        return `Catastrophique ${eleve} tu as ${moyenne} de moyenne`
    }
    if(moyenne < 11){
        return `Insuffisant ${eleve} tu as ${moyenne} de moyenne`
    }
    if(moyenne < 15){
        return `Passable ${eleve} tu as ${moyenne} de moyenne`
    }
    if(moyenne < 19){
        return `Bien ${eleve} tu as ${moyenne} de moyenne`
    }
    if(moyenne < 21){
        return `Très bien ${eleve} tu as ${moyenne} de moyenne`
    }

        return "Note non valide";
}

console.log(moyenneDeLeleve("Audrey",20,20,20,20,20,20,20,20));