type Chat = {
  nom: string;
  race: string;
  age: number;
  poid: number;
};

const getChat = (chat: Chat, ...surnoms: string[]) => {
  for (const surnom of surnoms) {
    console.log(surnom);
  }

  console.log(`${chat.nom} ${chat.race} ${chat.age} ${chat.poid}`);
};

const tao:Chat ={
    nom: "Tao",
    race: "chat",
    age: 6,
    poid: 7,
}

getChat( tao,"mimine", "grosse patate", "sac de poils", "mangeur de paté du dimanche");
