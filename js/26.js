/*Escribir un algoritmo que permita calcular y mostrar el jornal
mensual de una empresa de acuerdo con las siguientes especificaciones:
· los trabajadores tienen dos turnos (nocturno y diurno)
· la tarifa de las horas diurnas es de 10 pesos.
· La tarifa de las nocturnas es de 20 pesos.
· Ningún trabajador recibe nada por sábados o domingos.
· El trabajador será despedido si sus horas trabajadas son menores que
15.
El algoritmo termina cuando sea dado cero como horas trabajadas. */

const jornalMen = () => {
    let totalHrs = 0,
     salarioDiur = 0,
     salarioNoct = 0,
    salarioTotal = 0,
          tarifa = 100,
            dias = 0;

    for (var i = 1; i < 23; i++ ) {
        var hrs = prompt(`Ingrese las horas trabajadas del dia ${i}`),
        hrsTrabajo = Number.parseInt(hrs);
        if ( hrsTrabajo != 0 ){
            totalHrs = totalHrs + hrsTrabajo;
            dias ++;
            var turno  = prompt(`Ingrese el turno laborado (diurno o nocturno)`);
            if (turno == "diurno") {
                salarioDiur = salarioDiur + (hrsTrabajo * 10);
            } else if (turno == "nocturno") {
                salarioNoct = salarioNoct + (hrsTrabajo * 20);
            } else {
                console.log("Chales carnal ya rompiste el programa :c")
                break
            }
        } else { break }          
    }
    if (totalHrs >= 15) {
        salarioTotal = salarioDiur + salarioNoct;
        console.log(`Este mes trabajo: ${totalHrs} hrs, por ${dias} dias, Salario mensual es de: ${salarioTotal}$`);
    } else {
        console.log(`Usted esta despedido por flojo`);
    }        
}
jornalMen();
