class Chatte{
    nom!: string;
    race!: string;
    age!: number;
    poid!: number;


    getChat = () => {
        console.log(
          `Mon super chat s'appelle ${this.nom}, c'est un ${
            this.race
          }, son age est de  ${this.age}, son poids est de ${
            this.poid
          } kg `
        );
      };

    }
      const tao2: Chatte =new Chatte();
      tao2.nom = "Tao";
      tao2.race = "chat";
      tao2.age = 7 ;
      tao2.poid = 5;
