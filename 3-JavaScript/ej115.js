let elMasGrande = (nombre) => {
    switch (nombre) {
        case 'Roman':
            console.log('El mejor de la historia es Román'.toUpperCase());
            break;
        case 'roman':
            console.log('Los nombres propios inician con Mayuscula!');
            break;
        default:
            console.log('Por favor ingrese el nombre de un gran jugador'.toLowerCase());
    }
}

elMasGrande('pedro');
elMasGrande('Roman');
elMasGrande('roman');