let numero = 0;
let contador = 0;
let resultado = null;
let contador2 = null;

while(contador2 <= 10) {
    if (resultado <= 10000) {
    resultado = numero + contador;
    numero = resultado;
    contador++;
    } else if (numero % 2 == 0) {
        console.log(numero)
        contador2++
    } else {
        contador++
    }
}

// console.log(resultado);

