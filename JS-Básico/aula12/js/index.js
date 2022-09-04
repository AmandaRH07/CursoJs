let varA = "A"; //B
let varB = "B"; //C
let varC = "C"; //A
let aux = "x";

aux = varA;
varA = varB;
varB = varC;
varC = aux;


console.log(varA, varB, varC);

let umaString = "Um \"texto\"";
console.log(umaString); 