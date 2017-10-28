let tabla = 9;
let multiplicador = 1; 
let resultado = null;
let multiplicarHasta = 12; //Agrego esta variable para que sea más dinámico el programa

for (; multiplicador <= multiplicarHasta; ) {
    resultado = tabla * multiplicador;
    console.log(resultado);
    multiplicador++;      
}