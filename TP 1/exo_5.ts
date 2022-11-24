/**
 * recherche le nombre le plus grand
 * @param numbs la liste des nombres
 * @returns le nombre le plus grand
 */
let lePlusGrandNombre = (...numbs:number[]):number =>{
    let lePlusGrand = 0;
    numbs.forEach( numb => {
        if( numb > lePlusGrand) {
            lePlusGrand= numb;
        }
    });

    return lePlusGrand;
}

console.log(lePlusGrandNombre(121212,252,51235,1361654,1561464,21313));