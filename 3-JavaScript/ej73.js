let asteriscos = '*************';
let CantidadDeCaracteresDelString = 0;

while (CantidadDeCaracteresDelString < asteriscos.length){
    console.log(asteriscos.slice(CantidadDeCaracteresDelString));        
    CantidadDeCaracteresDelString++;
    //.slice está tomando la cantidad de strings que se le indíca, tiene como base índice 0.
}