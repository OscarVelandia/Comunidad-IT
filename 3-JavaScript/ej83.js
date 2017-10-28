let asteriscos = '*************';
let CantidadDeCaracteresDelString = 0;

do {
    console.log(asteriscos.slice(CantidadDeCaracteresDelString));        
    CantidadDeCaracteresDelString++;
    //.slice está recortando segun las veces que va haciendo el ciclo.
} while (CantidadDeCaracteresDelString < asteriscos.length);