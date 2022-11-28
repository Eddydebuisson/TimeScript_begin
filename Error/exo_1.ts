type Chat = {
  nom: string;
  race: string;
  age: number;
  poid: number;
};
/**
 * affiche la liste des surnoms et les données du chat
 * @param chat le chat 
 * @param surnoms la liste des surnoms
 */
const getChat = (chat: Chat, ...surnoms: string[]) => {
  console.log(
    `Mon super chat s'appelle ${chat.nom}, c'est un ${
      chat.race
    }, son age est de  ${chat.age}, son poids est de ${
      chat.poid
    } kg et voici sa liste de surnom ${surnoms.join(",")}`
  );
};

const tao: Chat = {
  nom: "Tao",
  race: "chat",
  age: 6,
  poid: 7,
};

getChat(
  tao,
  "mimine",
  "grosse patate",
  "sac de poils",
  "mangeur de paté du dimanche"
);
