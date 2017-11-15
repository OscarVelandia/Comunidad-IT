// Usando el spread operator "..." juntamos todos los parametros pasados en un array llamado "numeros"
function ordenarNumeros(...numeros) {
    // Usamos sort para ordenar de menor a mayor
    const numerosOrdenados = numeros.sort((a, b) => a < b)
    // El mínimo esta ahora en la primer posición
    const minimo = numerosOrdenados[0]
    // El máximo esta ahora en la última posición
    const maximo = numerosOrdenados[numerosOrdenados.length - 1]
    // Devuelvo un objeto con los 3 datos calculados usando object shorthand
    return [{ numerosOrdenados, minimo, maximo }]
}

const resultado = ordenarNumeros(10, 8, 25)

console.log(resultado)