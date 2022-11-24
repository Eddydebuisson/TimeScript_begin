/**
 * return dans un string le nombre le plus grand parmis les trois passer en paramètre
 */
let lePlusGrandNombreAvecTroisNombre = (premier: number, deuxieme:number, troisieme:number) :string => {
  let lePlusGrand = 0 ;
    if (premier> deuxieme){
        lePlusGrand =premier;
    }else {
        lePlusGrand = deuxieme;
    }
    if(lePlusGrand< troisieme){
        lePlusGrand= troisieme;
    }
  return `Le plus grand nombre est ${lePlusGrand}`;
}

console.log(lePlusGrandNombreAvecTroisNombre(2,2565,3));
console.log(lePlusGrandNombreAvecTroisNombre(4556,2 ,3));