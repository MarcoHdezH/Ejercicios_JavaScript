/* 6. Escribir un algoritmo que lea las horas trabajadas de una persona y la
   tarifa de pago para calcular su salario e imprimirlo. */

function calcularSalario(tarifa = undefined, horas = undefined) {
    if (tarifa === undefined) return console.log(`No se ingreso un valor en tarifa.`);
    if (horas === undefined) return console.log(`No se ingreso un valor en horas trabajadas.`);
    if (typeof (tarifa) !== "number") return console.error(`El dato ${tarifa} no es un número.`);
    if (typeof (horas) !== "number") return console.error(`El dato ${horas} no es un número.`);
    if (tarifa <= 0) return console.error("La tarifa debe ser mayor a 0");
    if (horas <= 0) return console.error("La tarifa debe ser mayor a 0");

    return console.log(`\nLa tarifa es ${tarifa}. El salario total es ${tarifa * horas}.`);
}

//Ejemplos de Uso

calcularSalario();
calcularSalario(false, null);
calcularSalario(10,);
calcularSalario("fol", 10);
calcularSalario(10, 10);