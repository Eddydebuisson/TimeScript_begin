import { Mammifere } from "../Abstract/Mammifere";
import { Aquatique } from "../Interface/aquatique";

class Dauphin extends Mammifere implements Aquatique{
    constructor(nom:string, poids:number, dateNaissance:Date){
        super(nom,poids,dateNaissance)
    }

    retenirRespiration():void{
        console.log("je retiens ma respiration !! ")
    }

    cliquetter():void{
       console.log("je cliquette !! ")
    }

    respirerSousEau(): string {
        return "je respire sous l'eauuuu !! blblblblblblblbll"
    }
    
    nager(): string {
        return "bloubloubllouuuuup"
    }

}