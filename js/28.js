/*Escribir un algoritmo que clasifique a 50 personas según su edad y
sexo, al final deberá escribir la cantidad de personas masculinas mayores
de edad, la cantidad de personas femeninas menores de edad, cantidad de
personas mayores y menores, además deberá indicar el porcentaje que
representan las personas mayores y las menores, de edad.*/

let edad = Array(50),
    sexo = Array(50),
    min1 = 1,
    max1 = 99,
    min2 = 1,
    max2 = 3;

for (var i = 1; i < 51; i++) {
    edad[i] = Math.floor(Math.random() * (max1 - min1) + min1);
    sexo[i] = Math.floor(Math.random() * (max2 - min2) + min2);
    //console.log(`Edad: ${edad[i]}, Sexo: ${sexo[i]}`);
}

const clasificacion = () => {
    let masculinoMayor = 0,
        femeninoMenor = 0,
        mayor = 0,
        menor = 0;

    for (var i = 1; i < 51; i++) {

        if (sexo[i] == 1 && edad[i] > 18) {
            masculinoMayor++;
        }
        if (sexo[i] == 2 && edad[i] < 18) {
            femeninoMenor++;
        }
        if (edad[i] > 18) {
            mayor++;
        } else {
            menor++;
        }
    }
    var porcenMayores = (mayor / 50) * 100;
    var porcenMenores = 100 - porcenMayores;
    console.log(`Hombres mayores: ${masculinoMayor}, Mujeres menores: ${femeninoMenor},
        Personas Mayores: ${mayor}, Personas Menores: ${menor},
        Porcentaje de Mayores: ${porcenMayores}%, Pocentaje de Menores ${porcenMenores}%.`);
}
clasificacion();
