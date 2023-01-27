/*     18. Dadas N notas de un estudiante, escribir un algoritmo que calcule:
    a) Cuántas notas tiene desaprobadas.
    b) Cuántas aprobadas.
    c) El promedio de notas.
    d) El promedio de notas aprobadas y el de desaprobadas. */

function calcularPromedio(arr) {
    suma = 0
    arr.forEach(element => {
        suma += element
    });

    console.log(suma);
    return suma / arr.length
}

function analizar(arr) {
    if (arr === undefined) return console.warn("No ingresaste un arreglo de números");
    if (!(arr instanceof Array)) return console.error(`El valor introduccido no es un arreglo.`);
    if (arr.length === 0) return console.error(`El arreglo está vacío`);

    for (const x of arr) {
        if (typeof (x) !== "number") return console.error(`El valor ${x} no es un número`);
    }

    let aprobadas = arr.filter(x => x > 5);
    let reprobadas = arr.filter(x => x <= 5);

    let promedioTotal = calcularPromedio(arr);
    let promedioReprobadas = calcularPromedio(reprobadas);
    let promedioAprobadas = calcularPromedio(aprobadas);
    console.log(`Aprobadas: ${aprobadas.length}`)
    console.log(`Reprobadas: ${reprobadas.length}`)
    console.log(`Promedio calificaciones A: ${promedioAprobadas}.`)
    console.log(`Promedio calificaciones R: ${promedioReprobadas}.`)
}

analizar([1, 2, 3, 4, 5]);