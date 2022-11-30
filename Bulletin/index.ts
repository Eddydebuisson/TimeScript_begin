import Bulletin from "./class/Bulletin";
import Eleve from "./class/Eleve";
import Note from "./class/Note";

const bulletin:Bulletin = new Bulletin();

const eleve: Eleve = new Eleve ("cover", "Harry", bulletin);
const note1 : Note = new Note('Poo', 20)
const note2 : Note = new Note('Tyescript', 15)
const note3 : Note = new Note('Css', 0)
const note4 : Note = new Note("UML",10)
const note5 : Note = new Note("PHP", 12)
const note6 : Note = new Note("React",19)
eleve.ajouterNotes(note1,note2,note3,note4,note5,note6);

eleve.afficherNotes();
eleve.afficherMoyenne();