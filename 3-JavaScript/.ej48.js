let mensaje = '3.14 es un gran número, pero mejor es 42 que le da significado a la vida';
let pi = mensaje.slice(0,4);
let significadoDeLaVida = mensaje.slice(38,40).parseInt;
let resultado = parseInt(pi) && parseInt(significadoDeLaVida);

console.log(`${resultado} es el resultado de sumar las variables ${pi} y ${significadoDeLaVida}`)