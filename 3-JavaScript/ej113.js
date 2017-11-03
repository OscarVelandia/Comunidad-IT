let obtenerPerimetroRectangulo = (base, altura) => {
    let perimetro = (base + altura) * 2;

    switch (true) {
        case (base == altura):
            console.log(`El perímetro del cuadrado es: ${perimetro}`) ; 
            break;
        case (base != altura):
            console.log(`El perímetro del rectangulo es: ${perimetro}`);
            break;
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