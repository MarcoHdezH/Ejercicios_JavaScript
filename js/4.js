/*  4. Escribir un algoritmo que lea un tiempo en segundos y que calcule los
    segundos restantes que le correspondan para convertirse exactamente en
    minutos. */

function calcularTiempo(tiempo) {
    if (tiempo === undefined) return console.log(`No se ingreso un valor.`);
    if (typeof (tiempo) !== "number") return console.error(`El valor de tiempo "${tiempo}" no es un número.`);
    if (tiempo <= 0) return console.error("La tiempo debe ser mayor a 0");

    let segundosFaltantes = tiempo % 60;
    let minutos = parseInt(tiempo / 60);
    console.log(`Faltan ${60 - segundosFaltantes} segundos para ${minutos + 1} minutos `)
}

// Ejemplos de Uso

calcularTiempo();
calcularTiempo(false);
calcularTiempo(-3);
calcularTiempo(37);
calcularTiempo(1232);
calcularTiempo(159);