let edad = prompt("Escriba su edad:")
console.log(edad)
if(edad>=0 && edad <=12){
    console.log("Su rango de edad se encuentra en niño")
}
if(edad>=13 && edad <=19){
    console.log("Su rango de edad se encuentra en adolescente")
}
if(edad>=20 && edad <=59){
    console.log("Su rango de edad se encuentra en adulto")
}
if(edad>=60 && edad <= 100){
    console.log("Su rango de edad se encuentra en adulto mayor")
} if (edad > 100 ) {
    console.log('es usted inmortal?')
}