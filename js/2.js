/*2. A un trabajador le descuentan de su sueldo el 10% si su sueldo es menor o igual a 1000, por encima de 1000 y hasta 2000 el 5% del adicional,
y por encima de 2000 el 3% del adicional. 
Escribir un algoritmo que calcule el descuento y sueldo neto que recibe el trabajador dado su sueldo. */

function calcularDescuento(sueldo) {

    if (sueldo === undefined) {
        return console.log(`No se ingreso un valor.`);
    }

    if (typeof (sueldo) !== "number") {
        return console.error(`El valor ${sueldo} no es un número.`);
    }

    if (sueldo <= 0) {
        return console.error("La sueldo debe ser mayor a 0");
    }

    let descuento;
    (sueldo <= 1000)
        ? descuento = 0.10
        : (sueldo <= 2000)
            ? descuento = 0.05
            : descuento = 0.03

    let sueldoNeto = sueldo - sueldo * descuento;

    console.log(`El descuento es de ${descuento * sueldo}, el suedo total es ${sueldoNeto}`);
}

//Ejemplos Uso

calcularDescuento();
calcularDescuento("hola");
calcularDescuento(0);
calcularDescuento(5000);
calcularDescuento(1000);