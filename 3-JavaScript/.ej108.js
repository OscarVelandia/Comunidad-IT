function ordenarNumeros(numero1, numero2, numero3){
    let vueltas = 0;

    while (vueltas < 3){
        if (numero1 > numero2 && numero1 > numero3){
            console.log(numero1);
            vueltas++;
        } 
        if (numero2 > numero1 && numero2 > numero3) {
            console.log(numero2);
            vueltas++;
        }
        if (numero3 > numero1 && numero3 > numero2) {
            console.log(numero3);
            vueltas++;
        }  
    }
}

ordenarNumeros(10, 8, 25);