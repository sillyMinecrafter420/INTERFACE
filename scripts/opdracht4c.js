const person1 = {
    //we benoemen naam en leeftijd
    name: "sophia",
    age: 18,
};

const person2 = {

    //met spread halen we alles uit person1 op
    ...person1,
    //we passen de age aan door hem opnieuw te benoemen
    age:19,
};

//we loggen onze data in de console, heb comma gebruikt inplaats van een plus zodat hij de twee dingen die ik wil loggen los vasn elkaar ziet
console.log("person1 data en stuff ", person1);

console.log("person2 data en stuff ", person2);