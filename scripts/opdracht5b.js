const person = {
    naam:"sophia",
    age:"69",
    city: "england",
}

//ik heb name vervangen voor naam want mijn visual studio zag het als een deprecated javascript item
const{ naam, age, city } = person

console.log(naam + " is " + age + " jaar oud en woont in de stad " + city);