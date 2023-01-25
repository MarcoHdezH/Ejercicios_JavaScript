/*A un trabajador le pagan según sus horas trabajadas y una tarifa de pago por hora.
Si la cantidad de horas trabajadas es mayor a 40 horas, la tarifa se incrementa en un 50% para las horas extras. 
Escribir un algoritmo que calcule el salario del trabajador dadas las horas trabajadas y la tarifa.*/ 


function calcularSalario(tarifa = undefined, horas = undefined) {
    
    if(tarifa === undefined){
        return console.error(`No se ingreso un valor en tarifa.`);
    }else{
        if(horas === undefined){ 
            return console.error(`No se ingreso un valor en horas.`);
        }else{
            if(typeof(tarifa) !== "number"){ 
                return console.error(`El dato ${tarifa} no es un número.`);
            }else{
                if(typeof(horas) !== "number"){ 
                    return console.error(`El dato ${horas} no es un número.`);
                }else{
                    if(tarifa <= 0){ 
                        return console.error("La tarifa debe ser mayor a 0");
                    }else{
                        if(horas <= 0){ 
                            return console.error("La tarifa debe ser mayor a 0");
                        }else{
                            if(horas >= 40) {
                                tarifa += tarifa * 0.5;
                                console.log(`\nLa tarifa es ${tarifa}.`);
                                console.log(`El salario total es ${tarifa * horas}.`);
                            }else{
                                console.log(`\nLa tarifa es ${tarifa}.`);
                                console.log(`El salario total es ${tarifa * horas}.`);
                            }
                        }
                    }
                }
            }
        }
    }
}

  //Ejemplos de Uso 
  calcularSalario();
  calcularSalario(12);
  calcularSalario("hola", 0);
  calcularSalario(10, "fol");
  calcularSalario(0,120);
  calcularSalario(10,0);

  calcularSalario(100, 40);
  calcularSalario(100, 41);