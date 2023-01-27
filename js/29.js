/* 29. Escribir un algoritmo que ordene una lista de números indicando al
    final la cantidad de números pares y la cantidad de números impares, el
    dato a ingresar es un número y se debe repetir el proceso mientras el
    número ingresado sea diferente a cero. */

function generarNumeros(numero) {
    let lista = [];

    for (let i = 0; i < numero; i++) {
        x = [Math.round(Math.random() * 1000)]
        lista.push(x);
    }

    return lista;
}

function filtrarYContar(numero) {
    let lista = generarNumeros(numero);
    let pares = lista.filter(x => x % 2 == 0);
    let impares = lista.filter(x => x % 2 == 1);

    console.log(`      Número pares: ${pares.length} 
        Número impares: ${impares.length}.`)
}

function main(lista) {
    if (lista === undefined) return console.warn("No ingresaste un arreglo de números");
    if (!(lista instanceof Array)) return console.error(`El valor introduccido no es un arreglo.`);
    if (lista.length === 0) return console.error(`El arreglo está vacío`);

    for (let i = 0; i < lista.length; i++) {
        if (typeof (lista[i]) !== "number") return console.error(`El valor ${lista[i]} no es un número`);

    }

    for (let i = 0; i < lista.length; i++) {
        if (lista[i] === 0) {
            return console.error("El número debe ser mayor 0");
        } else {
            console
            filtrarYContar(lista[i]);
        }
    }
}

main([9, 8, 7, 6, 0, 5]);