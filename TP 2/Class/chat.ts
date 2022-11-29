import { Mammifere } from "../Abstract/Mammifere";
import { Terrestre } from "../Interface/Terrestre";

class Chat extends Mammifere implements Terrestre {

  constructor(nom:string, poids:number,dateNaissance:Date){
    super(nom, poids, dateNaissance)
  }

  display():void{
    console.log(`Je m'appelle ${this._nom}, je suis un gros de ${this._poids} kg et j'ai ${this.age} `)
  }
  
  respirerHordeLeau(): void {
    console.log("Je respire hors de l'eauuuuu !! Mais j'aime pas l'eau !! ")
  }

  marcher(): void {
    console.log("je marche avec mes super patounes !! ♥")
  }

  miauler(): void {
    console.log("Miaouuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu");
  }

}


const miou:Chat = new Chat ("Tao",7,new Date("2000-12-12"))

miou.display();
miou.miauler();
miou.marcher();
miou.respirerHordeLeau();

