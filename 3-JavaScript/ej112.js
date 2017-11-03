let mostrarNumeros = (inicio, fin) => {
    if (inicio === fin){
        console.log('Los números son iguales');
    } else if (typeof inicio !== 'number' || typeof fin !== 'number') {
        console.log('Solo se aceptan valores numéricos')
    } else if (typeof inicio === 'number' && typeof fin === 'number') {
        for(; inicio <= fin && inicio != fin; inicio++){
            console.log(inicio);
        } 
        for (; inicio >= fin && inicio != fin; inicio--){
            console.log(inicio);
        }
    }
};

mostrarNumeros(0, 10);
mostrarNumeros(10, 0);
mostrarNumeros(10, 10);
mostrarNumeros("10", 30);