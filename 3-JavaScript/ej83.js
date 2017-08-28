let asterisco = '*************';
let vueltaActual = 0;

do {
    console.log(asterisco.slice(vueltaActual));        
    vueltaActual++
    //.slice está recortando segun la cantidad de vuelta
} while(vueltaActual < asterisco.length);