/*   22. Escribir un algoritmo que calcule la media de 100 números dados e
    imprima su resultado */
function generarNumeros(numero) {
    let lista = [];

    for (let i = 0; i < numero; i++) {
        x = Math.round(Math.random() * 1000)
        lista.push(x);
    }
    console.log(lista)
    return lista;
}

function calcularMedia(lista) {
    suma = 0
    lista.forEach(element => {
        suma += element
    });

    console.log(suma);
    return suma / lista.length
}

function main(numero) {
    media = calcularMedia(generarNumeros(numero));

    console.log(`La media de  ${numero} números aleatorios es: ${media}.`)
}

main(100);