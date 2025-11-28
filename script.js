const nom = "Mouhamed"
console.log(nom)
let age = 13
console.log(age)
const isOk = true
console.log(isOk)
const prenom = null
console.log(prenom)
const surnom = undefined
console.log(surnom)
const list = [1,3,5,"hey","blad"]
console.log(list[3])
const user = {
    nom: "Mouhamed",
    pays: "Gabon",
    age: 18,
    langage: ["francais","anglais"]
}
console.log(user.langage[1])
const num1 = 10
const num2 = 3
console.log(num1+num2)
console.log(num1-num2)
console.log(num1*num2)
console.log(num2/num1)
console.log(num1%num2)
const dad = "pere"
const mom = "mere"
console.log(dad+mom)
if (age>=18){
    console.log("adult")
}else{
    console.log("mineur")
}
const heure = 7
if ( heure<12){
    console.log("le matin")
}else if (heure>12&&heure<18){
    console.log("apres-midi")
}else{
    console.log("le soir")
}