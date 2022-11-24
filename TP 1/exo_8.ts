/**
 * Créer une pyramide de la taille du nombre passer en paramètre dans la console
 */

let pyramide =(numb: number):void=>{

    
    for (let index = 0; index < numb; index++) {
        console.log("*".repeat(index))
        
    }

    for (let index = numb-2; index > 0; index--) {
        console.log("*".repeat(index))
        
    }

}
pyramide(100);