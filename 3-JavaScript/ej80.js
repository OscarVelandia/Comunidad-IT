let contador = 0;
let sumaParcial = null;
let cantidadDeNumerosASumar = 1000; //Agregué esta variable para hacer más dinámico el programa

do {
    if (contador % 2 == 0){
        console.log(sumaParcial);
        sumaParcial += contador; 
        contador++;    
    } else {
        contador++;
    }
} while (contador <= cantidadDeNumerosASumar);