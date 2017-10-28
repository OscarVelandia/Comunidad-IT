let contador = 0;
let contadorPar = 1;
let sumaParcial = null;
let cantidadDeNumerosPar = 10; //Variable para agregar la cantidad de números pares que quiero mostrar.

for (; contadorPar <= cantidadDeNumerosPar; contador++){
    if (contador % 2 == 0){
        sumaParcial += contador;
        contadorPar++
        console.log(sumaParcial);
    };
};