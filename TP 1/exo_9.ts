let monaie = (numb: number): void => {
  let billetDeCinqCent:number = 0;
  let billetDeDeuxCent:number = 0;
  let billetDeVingt:number =0 ;
  let billetDeDix:number =0 ;
  let billetDeCinq:number = 0 ;
  let pieceDeDeux:number =0;
  let pieceDeCinquanteCentime:number = 0;
  let pieceDeDeuxCentime:number =0;
  let tableauDebillet:number[] = [500,200,20,10,5,2,0.5,0.02]
  console.log(`ex: ${numb}`)

    for (let index = 0; index < tableauDebillet.length;) {
        while(numb-tableauDebillet[index] >= 0){
            numb = Math.floor( ((numb-tableauDebillet[index])*100)/100);

            console.log(numb)
        }
        index ++;
        
    }

};

monaie(2789.32);