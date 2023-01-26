/*11. Una tienda se dedica a la venta de computadoras, cada vendedor
tiene un sueldo mensual pero además de su sueldo gana una comisión por
venta: Si el monto de venta es mayor de 10,000 la comisión será del 15%.
Si el monto de venta es mayor o igual a 5,000 y menor de 10,000 la
comisión es del 5%. Si el monto de la venta es menor que 5,000 no tiene
comisión. Escribir un algoritmo que calcule el sueldo total de cada
vendedor.*/

function salarioVendedor( venta) {
    let sueldo = 5000,
    salarioTotal;

    if ( venta > 10000 ) {
        var salarioExtra = sueldo * .15;
        salarioTotal = salarioExtra + sueldo;
        console.log(`Su Salario con una comisiòn del 15% por una venta mayor de 10,000 es de: ${salarioTotal}`);
    } else if ( venta <= 10000 && venta >= 5000 ) {
        var salarioExtra = sueldo * .05;
        salarioTotal = salarioExtra + sueldo;
        console.log(`Su Salario con una comisiòn del 5% por una venta mayor de 5,000 es de: ${salarioTotal}`);
    } else {
        console.log(`Su Salario mensual es de: ${sueldo}`);
    }
    
}
salarioVendedor(2500);
