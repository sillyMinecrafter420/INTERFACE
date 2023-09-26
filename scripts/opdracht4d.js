//okay dit ziet er echt heel grappig uit

//functie genaamd coimbine arrays, pakt alle meegestuurde parameters doormiddel van ...rest
function combineArrays(...rest){
    //returned all meegestuurde parameters in een keer via spread (...rest) in dit geval (ook gelijk aan elkaar vast dus)
return [...rest];
}

let meow = ["poes", "kat", "kater"];
let woof = ["hond", "puppy", "daggoe"];

const samenGevoegd = combineArrays(meow, woof);
console.log("samen gevoegde array: ",samenGevoegd);