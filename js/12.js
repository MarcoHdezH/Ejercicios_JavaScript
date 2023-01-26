/* 12. Katthy organiza una fiesta en la cual una computadora controla el
   ingreso mediante 5 claves. Si se ingresa al menos una clave incorrecta la
   computadora imprimirá "TE EQUIVOCASTE DE FIESTA" y no permitirá el
   ingreso. Si las 5 claves son correctas imprimirá "BIENVENIDO A LA FIESTA".
   Escribir un algoritmo que realice lo anterior.
   Las Claves son:
   1: "TIENES"
   2: "QUE SER"
   3: "INVITADO"
   4: "PARA"
   5: "INGRESAR" *//*  */

function esUnaClave() {
    let entrar = true;
    const correctas = new Set([]);
    const claves = new Set(["TIENES", "QUE SER", "INVITADO", "PARA", "INGRESAR"]);

    while (entrar) {
        let clave = prompt("Ingresa una clave");

        if (correctas.size == 4) {
            return console.log(`BIENVENIDO A LA FIESTA`)
        }

        if (claves.has(clave)) {
            correctas.add(clave)
        } else {
            console.log(`TE EQUIVOCASTE DE FIESTA`)
            entrar = false;
        }
    }

}
esUnaClave();
