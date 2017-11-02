let numeroMasGrande = (numero1, numero2) => {
    switch (true) { 
    //Usé true para que directamente entre a evaluar los parametros de la función.
        case (typeof numero1, typeof numero2 != 'number'):
            console.log('Esta función espera valores del tipo number');
        case (numero1 >= numero2):
            console.log(`El número ${numero1} es más grande que ${numero2}`);
            break;
        case (numero1 == numero2):
            console.log('Los dos números son ${numero1}');
    }
}

numeroMasGrande(30, '15');