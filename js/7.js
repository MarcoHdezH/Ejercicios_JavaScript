/*     
7. Escribir el algoritmo que permita emitir la factura correspondiente a una
compra de un articulo determinado, del que se adquieren una o varias
unidades. El IVA es del 15% y si el precio neto ( precio venta mas IVA) es
mayor de 50.00 pesos se debe realizar un descuento del 5%. */

function calcularFactura(nombreProducto = undefined, cantidad = undefined, precio = undefined) {
    if (nombreProducto === undefined) return console.log(`No se ingreso el nombre de un producto.`);
    if (precio === undefined) return console.log(`No se ingreso un valor en precio.`);
    if (cantidad === undefined) return console.log(`No se ingreso un valor en cantidad.`);

    if (typeof (precio) !== "number") return console.error(`El dato ${precio} no es un número.`);
    if (typeof (cantidad) !== "number") return console.error(`El dato ${cantidad} no es un número.`);
    if (precio <= 0) return console.error("La precio debe ser mayor a 0");
    if (cantidad <= 0) return console.error("La tarifa debe ser mayor a 0");

    let iva = 0.15;
    let precioNeto = precio + precio * iva;
    precioNeto = precioNeto * cantidad

    console.log(precioNeto);

    if (50 < precioNeto) return console.log(`Total de su factura: ${precioNeto -= precioNeto * 0.05}.`)

    return console.log(`Su factura es de ${precioNeto}.`);
}

//Ejemplos de Uso

calcularFactura();
calcularFactura("cereal");
calcularFactura("cereal", 12);
calcularFactura("cheetos", 2, 15);
calcularFactura("papel", 4, 22);