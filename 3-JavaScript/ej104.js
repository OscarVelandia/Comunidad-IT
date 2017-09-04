let fibonacci = function() {
    for (f = 0, f1 = -1, f2 = 1, vueltas = 0; vueltas <= 10; vueltas++){
        f = f1 + f2;
        f1 = f2;
        f2 = f;
        console.log(f);
        //formula que compartió nico.
    }    
}

fibonacci();
fibonacci();
fibonacci();