//ik heb het voorbeeld in de reader goed proberen te bestuderen, ik denk niet dat ik hem nog helemaal snap. maar hij werkt wel!! :))

function delayMessage(bericht, tijd){
    
    const data = bericht;

    const promise = new Promise((resolve, reject) => {
    let opgelost = 0;

    setTimeout(() => {
        opgelost = 1;
        if (opgelost == 1){
            resolve(data);
        } else{
            reject("nay :(");
        }
    },tijd);
    });

promise.then((data) => {
    console.log(data); 
  }).catch((error) => {
    console.error(error); 
  });
}

console.log(delayMessage("poesjes meowen!! ", 2000));