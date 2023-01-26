/* 13. Escribir un algoritmo que calcule las raíces de una ecuación
cuadrática cuya forma canónica es:
Ax**2 + By + C = 0
Solo se calcularán raíces reales. si el discriminante en menor de 0,
imprimir un mensaje que indique que existen dos raíces imaginarias. Los
coeficientes A,B,C serán ingresados. */

function calcularRaices(a, b, c) {
    if (a === undefined) return console.log(`No se ingreso un número.`);
    if (typeof (a) !== "number") return console.error(`El valor ${a} no es un número.`);
    if (a == 0) return console.error("La número debe ser diferente a 0");

    if (b === undefined) return console.log(`No se ingreso un número.`);
    if (typeof (b) !== "number") return console.error(`El valor ${b} no es un número.`);
    if (b == 0) return console.error("La número debe ser diferente a 0");

    if (c === undefined) return console.log(`No se ingreso un número.`);
    if (typeof (c) !== "number") return console.error(`El valor ${c} no es un número.`);
    if (c == 0) return console.error("La número debe ser diferente a 0");

    let discriminante = (Math.pow(b, 2)) - (4 * a * c);

    if (discriminante < 0) {
        console.log('Las raíces son imaginarias.');
    } else {
        let p = -b / (2 * a);
        let q = Math.sqrt(discriminante) / (2 * a);
        let x1 = p + q;
        let x2 = p - q;
        console.log(`Las dos raíces son: ${x1} ${x2}`);
    }
}

calcularRaices();
calcularRaices(43, false, 21)
calcularRaices(3, -5, 1);
calcularRaices(2, 5, -20);