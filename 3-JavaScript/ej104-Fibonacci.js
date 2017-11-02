let fibonacci = (sucesion, longitudDeLaSerie) => {
    for(sumandoA = sucesion - 1, sumandoB = sucesion - sumandoA, contador = 1; contador <= longitudDeLaSerie; contador++){
        sucesion = sumandoA + sumandoB;
        sumandoA = sumandoB;
        sumandoB = sucesion;
        console.log(sucesion);
    }
}

//En este programa se puede calcular la sucesión con la cantidad de series que quiera el usuario
//e iniciando desde el número que quiero.

fibonacci(0,5);
