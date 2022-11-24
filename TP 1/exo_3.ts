/**
 * cette fonction renvoi dans la console le profit ou la perte 
 */
let benefice  =(fabrication: number, vente: number) :void => {
    let profit: number = Math.abs(fabrication-vente);
    fabrication>vente? console.log(`Perte de ${profit}$`): console.log(`Gain de ${profit}$`);
}

benefice(15,2);
benefice(2,15);