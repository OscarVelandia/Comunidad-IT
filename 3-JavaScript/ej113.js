function obtenerPerimetroRectangulo(base, altura){
    if(base == altura){
        return (base + altura) * 2; 
    } 
    
    if (base != altura){
        return (base + altura) * 2;
    }
}
let perimetro = obtenerPerimetroRectangulo();

obtenerPerimetroRectangulo(14, 30)
obtenerPerimetroRectangulo(100, 30)
obtenerPerimetroRectangulo(190, 30)
obtenerPerimetroRectangulo(17, 30)


console.log(`El perímetro es ${perimetro}`)

if(perimetro > 100){
    console.log('El perímetro es muy grande');
} else {
    console.log('Este perímetro NO es muy grandeS');
}




// Si la base y altura son iguales calcular el perímetro de un cuadrado
// Si la base y altura son distintas calcular el perímetro de un rectángulo
// La función retorna el perímetro
// Mostrar en consola un mensaje del tipo: El perímetro es ${perimetro}
// Si el perímetro es mayor a 100 entonces:
// Mostrar el siguiente mensaje en consola: El perímetro es muy grande
// Sino
// Mostrar el siguiente mensaje en consola: Este perímetro no es muy grande
// Ejecutar y validar esta función con distintos valores numéricos