import { MilieuNaturel } from "./milieuNaturel";

export interface Aquatique extends MilieuNaturel {
    respirerSousEau():string ;
    nager():string;
}