const saboresDeHelado = []; 

saboresDeHelado.push('fresa','pistacho','cereza','chocolate blanco','chocolate','frutilla','mandarina','café','vainilla','banano');

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

cambioDeOrden(saboresDeHelado, 'ají');

//De esta manera también puedo sacar los 2 primeros sabores de helado
let saboresSinStock = [saboresDeHelado.shift(), saboresDeHelado.shift(), saboresDeHelado.pop(), saboresDeHelado.pop()];

console.log(`Sabores sin stock: ${saboresSinStock}\nSabores con stock: ${saboresDeHelado}`);