let numero = 0;
let contador = 0;
let resultado = null;

do {   
    resultado = numero + contador;      
    numero = resultado;
    contador++; 
} while(contador <= 1000);

console.log(resultado); 