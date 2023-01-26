/*     15. Escribir un algoritmo que permita escoger en un conjunto de números
    naturales:
    Cuáles son menores que 15.
    Cuáles son mayores de 50.
    Cuáles están comprendidos entre 25 y 50.
    El algoritmo termina con el ingreso de un número negativo. */

function clasificarNumeros() {
    let numeros = [];
    numero = prompt("Ingresa un número");

    while (-1 < numero) {
        numeros.push(numero)
        numero = prompt("Ingresa un número");
    }

    let menoresQue15 = numeros.filter(x => x < 15);
    let mayoresQue50 = numeros.filter(x => x > 50);
    let filtrados3 = numeros.filter(x => 15 <= x & x <= 50);

    console.log(`Números ingresados: ${numeros}\n`)
    console.log(`Números x < 15: ${menoresQue15}`)
    console.log(`Números x > 50: ${mayoresQue50}`);
    console.log(`Números entre 15 y 50: ${filtrados3}`)
}

clasificarNumeros();  
