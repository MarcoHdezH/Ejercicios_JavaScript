/*  16. Calcular mediante un algoritmo repetitivo la suma de los N primeros
    números naturales. */

function sumaNatu(num = 10) {
    let suma = 0;

    for (var i = 0; i <= num; i++) {
        suma = suma + i;
    }
    console.log(`La suma de los primeros ${num} naturales es: ${suma}`)
}
sumaNatu(100);
