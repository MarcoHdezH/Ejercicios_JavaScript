/*     Escribir el algoritmo que muestre el mensaje de acuerdo a la edad
ingresada: Si la edad es de 0 a 10 años “niño”, si la edad es de 11 a 14
años “púber” , si la edad es de 15 a 18 años “ adolescente” , si la edad
es de 19 a 25 años “joven” , si la edad es de 26 a 65 años “ adulto” , si
la edad es mayor de 65 “anciano”. */

function clasificar(edad) {
    if (edad === undefined) return console.log(`No se ingreso un valor.`);
    if (typeof (edad) !== "number") return console.error(`El valor ${edad} no es un número.`);
    if (edad <= -1) return console.error("La edad debe ser mayor a 0");

    let descuento;
    (edad <= 10)
        ? console.log("niño")
        : (edad <= 14)
            ? console.log("púber")
            : (edad <= 18)
                ? console.log("adolescente")
                : (edad <= 25)
                    ? console.log("joven")
                    : (edad <= 65)
                        ? console.log("adulto")
                        : console.log("anciano")
}

clasificar();
clasificar(false);
clasificar(-21)
clasificar(0);
clasificar(11);
clasificar(19);
clasificar(33);
clasificar(66);