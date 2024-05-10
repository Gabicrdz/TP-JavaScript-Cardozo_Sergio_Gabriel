let num = parseInt(prompt("Ingrese un numero:"))
console.log(num)
switch (num % 2) {
    case 0:
        console.log(`${num} es un número par`);
        break;
    case 1:
        console.log(`${num} es un número impar`);
        break;
    default:
        comsole.log(`Numero no válido`) ;
}

    // let num = parseInt(prompt('ingrese el nro')); 

    // if (num % 2 === 0) {
    //     console.log('es par')
    // } else {
    //     console.log('es impar')
    // }