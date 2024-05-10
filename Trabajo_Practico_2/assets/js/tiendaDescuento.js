let articulo = prompt("¿Que articulo desea?")
let cantidad = parseInt(prompt("Ingrese la cantidad que desea llevar:"))
let precioUnidad = parseInt(prompt("Ingrese el precio por unidad:"))
let precioCompra = (cantidad*precioUnidad)
let precioDescuento = precioCompra-(precioCompra*0.15)
switch (true) {
    case precioCompra > 20000 && cantidad >= 10:
        console.log("Precio con descuento de " + articulo + ": $" + precioDescuento);
        break;
    default:
        console.log("¡No supero la cantidad o el precio para el descuento!")
        console.log("Precio final sin descuento de " + articulo + ": $" + precioCompra);
        break;
}