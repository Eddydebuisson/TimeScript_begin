/**
 * return dans un string le nombre le plus grand parmis les trois passer en paramètre
 */

/**
 * Cherche le plus grand nombre parmis les trois nombres passer en paramètre
 * @param premier le premier nombre
 * @param deuxieme le deuxième nombre 
 * @param troisieme le troisième nombre
 * @returns un string qui affiche le plus grand nombre
 */
let lePlusGrandNombreAvecTroisNombre = (
  premier: number,
  deuxieme: number,
  troisieme: number
): string => {
  let lePlusGrand:number = 0;
  if (premier > deuxieme) {
    lePlusGrand = premier;
  } else {
    lePlusGrand = deuxieme;
  }
  if (lePlusGrand < troisieme) {
    lePlusGrand = troisieme;
  }
  return `Le plus grand nombre est ${lePlusGrand}`;
};

console.log(lePlusGrandNombreAvecTroisNombre(2, 2565, 3));
console.log(lePlusGrandNombreAvecTroisNombre(4556, 2, 3));
