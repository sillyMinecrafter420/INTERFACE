
//we maken een globale variabelen aan door het buiten een functie aan te maken
let globalVar = 10;

//in de opdracht wsa mij niet helemaalduidelijk wat we voor inner variabele moesten doen dus het leek mij logisch om een derde methode toe te passen
//he aanmaken van een variabel buiten de function en het invoeren van informatie in de function, hierdoor is het ook een public maar word de waarde pas bepaalt als de functie word gerunned.
let innerVar;

function modifyVar(){

    //hier maken we een locale variabel aan
   let localVar = 5;
   //hier passen we de innervariabel aan naar 2
    innerVar = 2;

    //hier loggen we alle variabelen, dit zou geen probleem moeten  hebben
   console.log("globale variabele in modifyVar: " + globalVar);
   console.log("locale variabele in modifyVar: " + localVar);
   console.log("inner variabele in modifyVar: " + innerVar);
}



   //voer de andere function uit
   modifyVar();

   try{
       //hier proberen we weer alle vaqriabelen te loggen maar komt er een error
console.log("globale variabele buiten modifyVar: " + globalVar);

//de inner variabel is aangepast tijdens het runnen van de functie dus je ziet nu ook weer "2"
console.log("inner variabele buiten modifyVar: " + innerVar);

//de locale variabel kan namelijk niet worden gepakt omdat die alleen binnen de functie zit
console.log("locale variabele buiten modifyVar: " + localVar);

} catch(error){
    //laat de error zien van de aangepaste variabelen.
    console.error("An error occurred:", error.message);
}