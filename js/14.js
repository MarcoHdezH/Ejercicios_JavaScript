/* 14. "TIENDAS PATITO" se encuentra de aniversario y ha programado una
serie de ofertas con la finalidad de brindar facilidades a sus clientes y
al a vez de incrementar sus ventas. Estas ofertas se basan específicamente
en un porcentaje de descuento sobre el total de compra el cual varia de
acuerdo al monto. 
 
Por un monto mayor o igual a $500 se hará un descuento del 30%. 
Por un monto menor de $500 pero mayor o igual a 200 se hará un descuento del 20%.
 
Por un monto menor de $200 pero mayor o igual a 100 se hará un descuento del 10%. 
Escribir un algoritmo que calcule la cantidad total a pagar de una compra. */

function calcularDescuento(monto) {
    if (monto === undefined) return console.log(`No se ingreso un valor.`);
    if (typeof (monto) !== "number") return console.error(`El valor ${monto} no es un número.`);
    if (monto <= 0) return console.error("La monto debe ser mayor a 0");

    let descuento;

    (monto < 100)
        ? descuento = 0
        : (100 <= monto & monto < 200)
            ? descuento = 0.10
            : (200 <= monto & monto < 500)
                ? descuento = 0.20
                : descuento = 0.30

    descontar = monto * descuento

    console.log(`Monto: ${monto}\n Descuento; ${monto * descuento}\n Total ${monto - descontar}`);
}

calcularDescuento(90);
calcularDescuento(130);
calcularDescuento(230);
calcularDescuento(500);
