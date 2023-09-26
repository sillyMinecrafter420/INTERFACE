try{  
//log de variabelen die we hebben aangemaakt daarvoor
console.log(count);
console.log(name);
 //probeer de constante variabele aam te passen
name = "Gorgievski";
} catch(error){
    //laat de error zien van de aangepaste variabelen.
    console.error("An error occurred:", error.message);

    //we krijgen de volgende error= An error occurred: Assignment to constant variable.

    //deze error betekent dat we de "const" variabel proberen aan te passen wat dus uiteraard niet kan
}