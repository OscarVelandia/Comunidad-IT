let mostrarNumerosPares = (numero) => {
    for (; numero <= 100; numero++){
        if (numero % 2 == 0){
            console.log(numero);
        }
    }
}    

mostrarNumerosPares(0);
mostrarNumerosPares(2);
mostrarNumerosPares(4);
mostrarNumerosPares(7);
mostrarNumerosPares(9);