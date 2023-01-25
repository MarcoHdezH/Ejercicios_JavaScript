function triangulo( long1=0, long2=0, long3=0 ) {
    let resL1y2 = long1 % long2,
    resL1y3 = long1 % long3,
    resL2y3 = long2 % long3,

    sumL1y2 = long1 + long2,
    sumL1y3 = long1 + long3,
    sumL2y3 = long2 + long3;
    
    if (sumL1y2 < long3 || sumL1y3 < long2 || sumL2y3 < long1) {
        console.log(`No es un triangulo`);
    } else {
        if (resL1y2 == 0 && resL1y3 ==0 && resL2y3 == 0) {
            console.log(`El Triangulo es Equilátero`);
        }
        if (resL1y2 == 0 && resL1y3 != 0 || resL2y3 == 0 && resL1y2 != 0 || resL1y3 == 0 && resL1y2 !=0) {
        //if (resL1y2 == 0 || resL2y3 == 0|| resL1y3 == 0 ) {
            console.log(`El Triangulo es Isósceles`);
        }
        if (resL1y2 > 0 && resL1y3 > 0 && resL2y3 > 0) {
            console.log(`El Triangulo es un Escaleno`);
        }
    }   
}
triangulo(5,5,5);
