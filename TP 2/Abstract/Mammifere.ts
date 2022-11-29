import { Animal } from "../Interface/animal";

export abstract class Mammifere implements Animal{
    _nom: string;
    _poids:number;
    _dateNaissance:Date;

    constructor( nom:string, poids:number, dateNaissance:Date){
        this._nom = nom;
        this._poids =poids;
        this._dateNaissance =dateNaissance;
    }

    display(): void {
        
        console.log("je suis un super Mammifere ♥♥♥");
    }

    get age():number{
            let date = new Date().getFullYear();
            return  date - this._dateNaissance.getFullYear();
    }
}


