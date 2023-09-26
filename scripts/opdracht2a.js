
//een arrow versie van de gegeven code
const multiply = (a,b) => a *b;


//een arrow versie van de gegeven code
const greet = (name) => "Hello, " + name + "!";

//een arrow functie waarin we 2x los het gegeven getal tonen en een keer het getal bij elkaar gevoegd
const double = (ingevoerd) => "1x " + ingevoerd + " 2x " + ingevoerd + " bij elkaar " +ingevoerd *2;

//hier filteren we alle even getallen eruit met if statements.
const filterEvens = (een, twee, drie, vier, vijf) => {if(een %2 ==0){console.log("even getal: " + een);} if(twee %2 ==0){console.log("even getal: " + twee);} if(drie %2 ==0){console.log("even getal: " + drie);} if(vier %2 ==0){console.log("even getal: " + vier);} if(vijf %2 ==0){console.log("even getal: " + vijf);}};

filterEvens(1,2,3,4,5);