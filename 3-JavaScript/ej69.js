let numero = 0;
let contador = 0;
let resultado = null;

while (contador <= 1000){   
    resultado = numero + contador;      
    numero = resultado;
    contador++; 
}

console.log(resultado); 