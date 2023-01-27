/*     20. Realizar un algoritmo que permita pedir 50 números naturales y
    determine e imprima cuántos son pares, impares, positivos y negativos. */

function numNatu() {
    let pares = 0,
        impar = 0,
        posit = 0,
        negat = 0;

    for (var i = 1; i <= 50; i++) {
        if ((i % 2) == 0) {
            pares++;
        } else {
            impar++;
        }
        if (Math.sign(i) == 1) {
            posit++;
        } else {
            negat++;
        }
    }
    console.log(`Numeros pares: ${pares}, Impares: ${impar}, Positivos ${posit}, Negativos ${negat}`);
}
numNatu();
