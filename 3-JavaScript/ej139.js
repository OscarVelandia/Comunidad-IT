const arrayNumeros = [];
//Con esta variable se asigna el tamaño de la serie.
let tamanioDeLaSerie = 10 - 1;

//Llenado del array
for(numero = 1; arrayNumeros.length < 100; arrayNumeros.push(numero), numero++){}

//Filtrado de los números para generar un nuevo array con los parametros indicados
arrayNumerosPares = arrayNumeros.filter(numero => numero % 2 === 0);

arrayNumerosImpares = arrayNumeros.filter(numero => numero % 2 !== 0);

//Con slice solo tomo una porción del array.
console.log(`//Array números Pares//\n${arrayNumerosPares.slice(0, 10)}\n//Array números Impares//\n${arrayNumerosImpares.slice(0, 10)}`);
