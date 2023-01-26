/* 17. Modificar el ejercicio 1 para obtener la suma de los salarios de 200
    trabajadores. */

let hrsTrab = Array(200),
    min = 8,
    max = 50;

for (var i = 1; i < 201; i++) {
    hrsTrab[i] = Math.floor(Math.random() * (max - min) + min);
}

const salarioTrabajador = () => {
    let tarifa = 100,
        salarioTotal;
    for (var i = 1; i < 201; i++) {
        if (hrsTrab[i] > 40) {
            var horasExtra = hrsTrab[i] - 40,
                salarioExtra = horasExtra * (tarifa + (tarifa * .50));
            salarioTotal = salarioExtra + (tarifa * 40);
        } else {
            salarioTotal = hrsTrab[i] * tarifa;
        }
        console.log(`El trabajador ${i} su salario es de: ${salarioTotal} pesos, por sus ${hrsTrab[i]} horas`);
    }
}
salarioTrabajador(200);
