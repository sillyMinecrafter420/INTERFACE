function printPerson(persoontj){

    const{ naam, leeftijd, stad } = persoontj
    

    console.log(naam + " is ondertussen " + age + " jaar oud maar woont nogsteeds in de stad " + city);
}

const persoonData = {
    naam: "sopje",
    leeftijd: 420,
    stad: "nogsteeds engeland",
  };


  printPerson(persoonData);


  const myPerson = {
    naam: "sopje",
    leeftijd: 420,
    stad: "nogsteeds engeland",
  };

  printPerson(myPerson);