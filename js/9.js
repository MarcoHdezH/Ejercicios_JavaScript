/*  Escribir el algoritmo que lea una hora y que muestre la programación de
    acuerdo al horario en que se transmite “dibujos animados ” : Si es de 10 a
    12 horas, “ tele serie ” : si es de 13 a 16 horas, “ novelas repetidas ” :
    si es de 16 a 18 horas, “dibujos animados ” : si es de 18 a 22 horas,
    “noticiero” : si es de 22 a 23 horas. */

function programacion( hora = 10 ) {
    
    if (hora < 10) {
        console.log(`No hay programas a las ${hora} hrs"`);
    }
    if (hora >= 10 && hora <=12) {
        console.log(`${hora} hrs Programa: "Dibujos Animados"`);
    }
    if (hora >= 13 && hora <=16) {
        console.log(`${hora} hrs Programa: "Tele Serie"`);
    }
    if (hora >= 17 && hora <=18) {
        console.log(`${hora} hrs Programa: "Novelas Repetidas"`);
    }
    if (hora >= 19 && hora <=21) {
        console.log(`${hora} hrs Programa: "Dibujos Animados"`);
    }
    if (hora >= 22 && hora <= 23) {
        console.log(`${hora} hrs Programa: "Noticiero"`);
    }    
}

programacion(16);
