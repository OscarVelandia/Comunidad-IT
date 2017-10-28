let asteriscos = '*************';
let CantidadDeCaracteresDelString = 0;

do {
    console.log(asteriscos.slice(CantidadDeCaracteresDelString));        
    CantidadDeCaracteresDelString++;
    //.slice está recortando segun la cantidad de vuelta
} while (CantidadDeCaracteresDelString < asteriscos.length);