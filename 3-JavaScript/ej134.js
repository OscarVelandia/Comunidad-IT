const arrayDeNumeros = [];
let sumaDelArray = 0;

//Con esto ingreso los números al array y la suma parcial despues de cada ingreso de números.
for(let numeros = 0; arrayDeNumeros.length <= 10000; sumaDelArray += numeros, console.log(sumaDelArray), numeros++){
    arrayDeNumeros.push(numeros);
    //Es interesante ver como se van ingresando los números al array pero cuando son muchos, se tarda demasiado en renderizar el resultado.
    // console.log(arrayDeNumeros);
}

console.log(sumaDelArray)

sumaDelArray === 50005000 ? console.log('El ejercicio es correcto') : console.log('Verificar el ejercicio para obtener el resultado esperado!!!');