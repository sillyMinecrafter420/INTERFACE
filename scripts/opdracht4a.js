// door ...rest mee te geven aan de function kan je extra parameters toevoegen
function som(...rest){

    //maak een int aan die uitgerekend heet en begint op 0
    let uitgerekend = 0;

    //for loop die langs alle rest getallen gaat
    for (let i = 0; i < rest.length; i++) {
        //bij elke loop voegen we een parameter toe aan uitgerekend
        uitgerekend = uitgerekend+ rest[i];
       
      }
      //return het resultaat
      return uitgerekend
}

//we voeren de som uit met 3 getallen die we meesturen
console.log(som(4,2,6));