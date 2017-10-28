let contador = 0;
let sumaParcial = null;
let cantidadDeNumerosASumar = 1000; //Agregué esta variable para hacer más dinámico el programa

while (sumaParcial <= 100) {
    sumaParcial += contador;      
    contador++; 
    console.log(sumaParcial);
}