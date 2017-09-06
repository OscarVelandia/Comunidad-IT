let numeroJugador = 9;

function mejorJugadorArgentino(numero){
    switch (numero) {
        case 18:
            return 'Nery Pumpido';
        case 5:
            return 'José Luis Brown';
        case 9:
            return 'José Cuciuffo'; 
        case 19:
            return 'Óscar Ruggeri';
        case 14:
            return 'Ricardo Giusti';
        case 16: 
            return 'Julio Olarticoechea'; 
        case 2:
            return 'Sergio Batista'; 
        case 12:
            return 'Héctor Enrique';
        case 7: 
            return 'Jorge Burruchaga';
        case 10:
            return 'Diego Armando Maradona'; 
        case 11:
            return 'Jorge Valdano';
        default:
            return 'Carlos Bilardo';
    }
}

console.log(`${numeroJugador}, ${mejorJugadorArgentino(numeroJugador)}`);