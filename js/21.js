/* 21. Desarrollar un algoritmo para calcular e imprimir el factorial de un
   número dado. */

function factorial(numero = 1) {
    let resFacto = 1;

    for (var i = 1; i <= numero; i++) {
        resFacto = resFacto * i;
    }

    console.log(`El numero factorial de: ${numero} es: ${resFacto}`);
}
factorial(5);
