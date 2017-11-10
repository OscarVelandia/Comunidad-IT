const arrayDeNumeros = [];

for(let numero = 0; arrayDeNumeros.length <= 20; numero++){
    arrayDeNumeros.push(numero)
}

const arrayDeNumerosModificados = arrayDeNumeros.map((numero, indice) => {
    if(indice < 10){
        console.log(`${indice} ${numero} ${numero + 10}`);
    }    
});