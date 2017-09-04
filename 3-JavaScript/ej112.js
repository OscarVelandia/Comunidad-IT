function mostrarNumeros(inicio, fin) {
    if (inicio === fin){
        console.log('Los números son iguales');
    } 
    
    if (typeof inicio !== 'number' || typeof fin !== 'number') {
        console.log('Solo se aceptan valores numéricos')
    }

    for(; inicio <= fin && inicio != fin && typeof inicio == 'number' && typeof fin == 'number'; inicio++){
            console.log(inicio);
        } 

    for (; inicio >= fin && inicio != fin && typeof inicio == 'number' && typeof fin == 'number'; inicio--){
            console.log(inicio);
        } 
}

mostrarNumeros(0, 10);
mostrarNumeros(10, 0);
mostrarNumeros(10, 10);
mostrarNumeros("10", 30);