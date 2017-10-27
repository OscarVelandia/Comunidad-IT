let mensaje = '3.14 es un gran número, pero mejor es 42 que le da significado a la vida';
let pi = mensaje.substr(0,4);
let significadoDeLaVida = mensaje.substr(38,2);
let resultado = parseFloat(pi) + parseFloat(significadoDeLaVida);

console.log(`${resultado} es el resultado de sumar las variables ${pi} y ${significadoDeLaVida}`)