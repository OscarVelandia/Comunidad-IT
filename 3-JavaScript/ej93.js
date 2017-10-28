let asteriscos = '*************';
let CantidadDeCaracteresDelString = 0;

for (; CantidadDeCaracteresDelString < asteriscos.length; CantidadDeCaracteresDelString++) {
    console.log(asteriscos.slice(CantidadDeCaracteresDelString));        
    //.slice está recortando segun las veces que va haciendo el ciclo.
}