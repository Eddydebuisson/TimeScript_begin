/**
 *  Rend la monaie du montant indiquer
 *
 * */
let monaie = (montant: number): void => {
  let tableauDebillet: number[] = [500, 200, 20, 10, 5, 2, 0.5, 0.02];

  let reste: number = montant;

  tableauDebillet.forEach((element) => {
    let n: number = Math.floor(((reste / element) * 100) / 100);
    reste = reste % element;
    if (n > 0) {
      element > 5
        ? console.log(`Billet de ${element}: ${n} `)
        : console.log(`Pièces de ${element}: ${n} `);
    }
  });
};

monaie(1200.36);
