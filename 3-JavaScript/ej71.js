let numero = 9;

// while (numero < 90){
//     console.log(numero);
//     numero += 9;  
// }

//Otra versión usando un multiplicador
let multiplicador = 1; 
let resultado = null;
let multiplicarHasta = 15; //Agrego esta variable para que sea más dinámico el programa

while (multiplicador <= multiplicarHasta){
    resultado = numero * multiplicador;
    console.log(resultado);
    multiplicador++;      
}