let numero = 0;
let contador = 0;
let resultado = null;

for(; contador <= 1000; ) {
    if(contador % 2 == 0){
        contador++;    
    } else {
        resultado = numero + contador;        
        numero = resultado;
        contador++;
    }
}

console.log(resultado);  