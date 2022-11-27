/**
 * Cherche la valeur la plus proche de zero dans la liste des température donné
 * @param temperatures la liste des température
 * @returns la témpérature la plus proche de zéro
 */
const temperatureLaPlusProcheDeZero = (...temperatures: number[]): number => {
  let valeurLaPlusProcheDeZero = 0;

  temperatures.reduce((premier, deuxieme) =>
    Math.abs(premier) > Math.abs(deuxieme)
      ? (valeurLaPlusProcheDeZero = deuxieme)
      : (valeurLaPlusProcheDeZero = premier)
  );
  return valeurLaPlusProcheDeZero;
};

console.log(temperatureLaPlusProcheDeZero(1, 2 , 3 ,4 ,8 ,94 ,-2 ,6 ,3))