let notaTrimestreUno = parseInt(prompt("Ingrese su nota del primer trimestre:"))
let notaTrimestreDos = parseInt(prompt("Ingrese su nota del segundo trimestre:"))
let notaTrimestreTres = parseInt(prompt("Ingrese su nota del tercer trimestre:"))
let promedio = (notaTrimestreDos+notaTrimestreUno+notaTrimestreTres)/3
console.log(notaTrimestreUno)
console.log(notaTrimestreDos)
console.log(notaTrimestreTres)
if (promedio>=1 && promedio <=3){
    comsole.log("Nota insuficiente")
}else if(promedio>=4 && promedio<=5){
    console.log("Nota Regular")
}else if(promedio>=6 && promedio<=7){
    console.log("Nota Buena")
}else if(promedio>=8 && promedio<=9){
    console.log("Nota Muy Buena")
}else if(promedio=10){
    console.log("Nota Sobresaliente")
}
