/**
 * recherche le nombre le plus grand nombre
 * @param nombres la liste des nombres
 * @returns le nombre le plus grand
 */
let lePlusGrandNombre = (...nombres: number[]): number => {
  let lePlusGrand = 0;
  nombres.forEach((nombre) => {
    if (nombre > lePlusGrand) {
      lePlusGrand = nombre;
    }
  });

  return lePlusGrand;
};

console.log(lePlusGrandNombre(121212, 252, 51235, 1361654, 1561464, 21313));
