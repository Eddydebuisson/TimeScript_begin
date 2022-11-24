/**
 *  calcule l'opération
 * @param operateur l'opérateur
 * @param premier premier nombre
 * @param deuxieme deuxième nombre
 * @returns le résultat de l'opération
 */
let calcule =(operateur:string, premier:number, deuxieme: number) :number=>{
    return parseInt(eval (`${premier} ${operateur} ${deuxieme}`))
}

console.log(calcule("+",21,2))