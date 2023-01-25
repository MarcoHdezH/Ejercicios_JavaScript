/* 3. Escribir un algoritmo que lea una cantidad y calcule el descuento
   considerando que si la cantidad dada está por encima de 100 el descuento
   es el 10% y si está por debajo de 100 el descuento es el 2%. */

function calcularDescuento(numero) {
    if (numero === undefined) return console.log(`No se ingreso un valor.`);
    if (typeof (numero) !== "number") return console.error(`El valor ${numero} no es un número.`);
    if (numero <= 0) return console.error("La numero debe ser mayor a 0");

    let descuento;
    (numero < 100)
        ? descuento = 0.02
        : descuento = 0.10;

    console.log(`Cantidad: ${numero}... total: ${numero - numero * descuento} `)
}

calcularDescuento();
calcularDescuento("hola");
calcularDescuento(0);
calcularDescuento(99);
calcularDescuento(100);