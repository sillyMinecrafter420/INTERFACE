export function capitalize(tekens){
    return "in hoofdletters is de ingevoerde string: " + tekens.toUpperCase();
}
export function reverse(string){
    //met split vervormen we de string tot een character array, we draaien de tekens om met reverse en met join maken we het weer een string
    return "omgedraait is de ingevoerde string: " + string.split('').reverse().join('');
}
export function countChars(tekenreeks){
    return tekenreeks.length + " is hoelang de ingevoerde string is";
}
