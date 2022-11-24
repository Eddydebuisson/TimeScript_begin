/**
 *  Retourne le résultat de l'opération qui est passer en paramètre
 * @param operateur 
 * @param premier 
 * @param deuxieme 
 * @returns 
 */
let calcule =(operateur:string, premier:number, deuxieme: number) :number=>{
    return parseInt(eval (`${premier} ${operateur} ${deuxieme}`))
}

console.log(calcule("+",21,2))