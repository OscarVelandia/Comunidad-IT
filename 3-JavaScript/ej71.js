let numero = 9;

while (numero < 90){
    console.log(numero);
    numero += 9;  
}

//Otra versión usando un multiplicador
let multiplicador = 1;
let resultado = null;

while (resultado < 90){
    resultado = numero * multiplicador;
    console.log(resultado);
    multiplicador++;      
}