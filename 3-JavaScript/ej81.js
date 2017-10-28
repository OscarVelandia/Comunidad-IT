let tabla = 9;

// do {
//     console.log(tabla);
//     tabla += 9;  
// } while (tabla < 90);

//Otra versión usando un multiplicador
let multiplicador = 1; 
let resultado = null;
let multiplicarHasta = 12; //Agrego esta variable para que sea más dinámico el programa

do {
    resultado = tabla * multiplicador;
    console.log(resultado);
    multiplicador++;      
} while (multiplicador <= multiplicarHasta);