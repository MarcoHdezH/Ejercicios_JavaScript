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
