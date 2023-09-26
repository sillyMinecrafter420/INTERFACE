//voor opdracht 3c moesten we logger importeren
import{logMessage} from './logger.js';

//we exporteren de funmcties door simpelweg "export" ervoor te plaatsen zodat we het kunnen gebruiken in andere bestanden
export function add(een, twee) {
    //we zetten het in een losser variabel zodat we het in return kunnen gooien zonder dat de som als een string word gezien
    let opgeteld = een + twee;
    return "uw twee getallen bij elkaar opgeteld zijn: " + opgeteld;
}
export function subtract(een, twee) {
    if (een > twee) {
        let uitgerekend = een - twee;
        console.log("de getallen van elkaar afgetrokken: " + uitgerekend);
    } else if (een < twee) {
        let uitgerekend = twee - een;
        console.log("de getallen van elkaar afgetrokken: " + uitgerekend);
    } else {
        //als de invoer niet klopt vertellen we dat
        return "onjuiste invoer of getallen zijn even groot";
    }
}


//update 3c
export function drieCadd(een, twee) {
    //we zetten het in een losser variabel zodat we het in return kunnen gooien zonder dat de som als een string word gezien
    let opgeteld = een + twee;

    //hier gebruiken we de logger om onze som in de console te zetten
    logMessage(opgeteld);

}

export function drieCsubtract(een, twee) {
    if (een > twee) {
        let uitgerekend = een - twee;
        logMessage("de getallen van elkaar afgetrokken: " + uitgerekend);
    } else if (een < twee) {
        let uitgerekend = twee - een;
        logMessage("de getallen van elkaar afgetrokken: " + uitgerekend);
    } else {
        //als de invoer niet klopt vertellen we dat
        return "onjuiste invoer of getallen zijn even groot";
    }
}