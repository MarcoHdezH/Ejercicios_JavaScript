/*Escribir un algoritmo que determine cuántos trabajadores recibirán
un salario mayor o igual a 500, dadas la tarifa y las horas trabajadas. */
const trabajadores = () => {
    let salario500 = 0;
    for (var i = 1; i < 10; i++ ) {
        var tarifa = prompt(`Trabajador ${i}: Ingrese la tarifa`);
        var hrsTrab = prompt('Ingrese sus horas trabajadas'),
        salario = Number.parseInt(tarifa) * Number.parseInt(hrsTrab);
        if (salario >= 500) {
            salario500 ++;
        }
        salario = 0; 
    }
    console.log(`Trabajadores que recibiran 500 o mas de salario son: ${salario500}`);
}
trabajadores();
