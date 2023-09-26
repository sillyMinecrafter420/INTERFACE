//we zetten een globale variable vast, die kan overal altijd worden gebruikt, ook in arrow functions waar gewoonlijk de waardes aan moeten worden meegestuurd
globalVar = 10

const myObject = {
  //hier zetten we de property waarde als 5
  waarde: 5,
  //hieronder voeren we de regular function uit
  regularFunction: function () {
    //we plaatsen op de pagina in de div met id meow onze informatie
    document.getElementById("meow").innerHTML = 
    "<p> dit is de waarde in het object: " + 
    //we pakken de local variable waarde
    this.waarde + 
    " dit is de global variable: " + 
    //we pakken de global variable waarde
    globalVar;
  },
  //in arrow functions moet je de property meegeven
  arrowFunction: (waarde) => {
    document.getElementById("meow").innerHTML += 
    "<br><br><p> dit is de waarde in het object via arrow: " + 
    //omdat we de variable meesturen hanteren we het als een normale variable
    waarde + 
    " dit is de global variable via arrow: " + 
    globalVar;
  }
}


//hier voeren we simpelweg de normale functie uit in myobject
myObject.regularFunction();
//in arrow functions moet je de property meegeven
myObject.arrowFunction(myObject.waarde);

