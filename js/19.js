/*     19. Dado un número n, escribir un algoritmo que determine la suma de sus
    dígitos. */

function sumaDigito( numero = 0) {
    let digito1,
    digito2,
    digito3,
    digito4;

    if (numero > 0 ){
        digito1 = Math.floor(numero / 1000);
        var digRes1 = numero % 1000;
        digito2 = Math.floor(digRes1 / 100);
        var digRes2 = digRes1 % 100;
        digito3 = Math.floor(digRes2 / 10);
        digito4 = digRes2 % 10;
    }
    console.log(`La suma de los digitos son: ${digito1+digito2+digito3+digito4}`);
}
sumaDigito(1234);
