let num1 = 10
console.log(num1)
let num2 = 3
console.log(num2)
const op = "*"
let resultat;
if (op === "+"){
    resultat = num1 + num2;
}
else if(op === "-"){
    resultat = num1 - num2;
}
else if(op === "*"){
    resultat = num1 * num2;
}
else if(op === "/"){
    resultat = num1 / num2;
}
else if(op === "%"){
    resultat = num1 % num2;
}
else{
    console.log("Operateur invalide");
}
if(resultat !== undefined){
    console.log("resultat:" + resultat);
}