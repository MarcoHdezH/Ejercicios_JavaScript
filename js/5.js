/* 5. Escribir un algoritmo que lea un tiempo en minutos y que calcule los días,
    horas y minutos que le corresponden. */

function convertidor(minutos) {
    if (minutos === undefined) return console.log(`No se ingreso un valor.`);
    if (typeof (minutos) !== "number") return console.error(`El valor de minutos "${minutos}" no es un número.`);
    if (minutos <= 0) return console.error("La minutos deben ser mayor a 0");

    let dias = Math.floor(minutos / 1440);
    let sobrante = minutos % 1440;
    let horas = Math.floor(sobrante / 60);
    let minutosRestantes = minutos % 60;

    console.log(`Son ${dias} días\n ${horas} horas\n y ${minutosRestantes} minutos.\n `)
}

//Ejemplos de Uso

convertidor();
convertidor(false);
convertidor(425);
convertidor(12345);
convertidor(129);