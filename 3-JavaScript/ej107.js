function numeroMasGrande(numero1,numero2) {
    if (typeof numero1, typeof numero2 != 'number'){
        console.log('Esta función espera valores del tipo number');
    } else if (numero1 >= numero2) {
       console.log(`El número ${numero1} es más grande que ${numero2}`);
    } else if ( numero1 == numero2){
        return console.log('Los dos números son ${numero1}');
    }
}

numeroMasGrande(30, '15');