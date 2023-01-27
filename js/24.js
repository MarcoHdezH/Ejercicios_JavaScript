/*    24. Escribir un algoritmo que lea varios caracteres, uno a la vez, y que
   se detenga cuando sea dada alguna de las vocales y la escriba. */

let caracteres = Array();

const leerCaracter = () => {
    var i = 0;
    do {
        var caracter = prompt('Ingrese un caracter');
        caracteres[i] = caracter;
        i++;
    } while (caracter != "a" && caracter != "e" && caracter != "i" && caracter != "o" && caracter != "u");
    console.log("Caracteres leidos:")
    for (var j = 0; j < i - 1; j++) {
        console.log(caracteres[j]);
    }
}
leerCaracter();
