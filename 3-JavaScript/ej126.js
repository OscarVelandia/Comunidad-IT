const saboresDeHelado = []; 

saboresDeHelado.push('fresa','pistacho','cereza','chocolate blacno','chocolate','frutilla','mandarina','café','vainilla','banano');

let cambioDeOrden = (arrayDeHelados, nuevoSabor) => {
    //Con esto guardo el método de sacar el primer y último elemento del array
    let primerElemento = arrayDeHelados.shift();
    let ultimoElemento = arrayDeHelados.pop();
    //Con esto agrego el primer y último elemento del array, además, hago uso de los metodos para sacar elementos,
    // es decir, agrego y quito en este momento.
    arrayDeHelados.unshift(ultimoElemento);
    arrayDeHelados.push(primerElemento);
    //Con esto agrego un nuevo sabor al final de la colección
    arrayDeHelados.push(nuevoSabor);
    //retorno la colección de helados modificada
    return arrayDeHelados;   
}

console.log(cambioDeOrden(saboresDeHelado, 'ají').join('\n'))