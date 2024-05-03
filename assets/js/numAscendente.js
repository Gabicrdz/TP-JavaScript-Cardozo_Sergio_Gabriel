let num1 = parseInt(prompt("Ingrese un numero:"))
let num2 = parseInt(prompt("Ingrese otro numero:"))
let num3 = parseInt(prompt("Ingrese otro numero:"))
if (num1>num2 && num2>num3 ){
    console.log("Orden Ascendente:")
    console.log(num3)
    console.log(num2)
    console.log(num1)
}else if(num2>num1 && num1>num3){
    console.log("Orden Ascendente:")
    console.log(num3)
    console.log(num1)
    console.log(num2)
}else if(num3>num1 && num2>num1){
    console.log("Orden Ascendente:")
    console.log(num1)
    console.log(num2)
    console.log(num3)
}else if(num1>num3 && num3>num2 ){
    console.log("Orden Ascendente:")
    console.log(num2)
    console.log(num3)
    console.log(num1)
}else if(num3>num1 && num1>num2 ){
    console.log("Orden Ascendente:")
    console.log(num2)
    console.log(num1)
    console.log(num3)
}else if(num2>num3 && num3>num1 ){
    console.log("Orden Ascendente:")
    console.log(num1)
    console.log(num3)
    console.log(num2)
}