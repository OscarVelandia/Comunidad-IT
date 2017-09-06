function obtenerPerimetroRectangulo(base, altura){
    let perimetro = (base + altura) * 2;

    if (base == altura){
        console.log(`El perímetro del cuadrado es: ${perimetro}`) ; 
    } 
    
    if (base != altura){
        console.log(`El perímetro del rectangulo es: ${perimetro}`)
    }
    if (perimetro > 100){
        console.log('El perímetro es muy grande');
    } else {
        console.log('Este perímetro NO es muy grande');
    }
}

obtenerPerimetroRectangulo(30, 30);
obtenerPerimetroRectangulo(100, 30);
obtenerPerimetroRectangulo(190, 30);
obtenerPerimetroRectangulo(17, 30);