let numero = 0;
let contador = 0;
let resultado = null;

while(resultado <= 100) {
    resultado = numero + contador;
    numero = resultado;
    contador++;
}

console.log(resultado);