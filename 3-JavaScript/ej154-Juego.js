let jugador = {
    nombre : null,
    energia : 100,
    vidas : 3,
    perderEnergia : function (danio){
        this.energia -= danio
        if (this.energia <= 0) {
            if (this.vidas > 1) {
                this.vidas -= 1;
                this.energia = 100;
            } else {
                console.log('Perdiste pero te damos 3 vidas!!!')
                this.vidas = 3;
                this.energia = 100;
            };
        };
    },
    recuperarEnergia : function(energiaRecuperada){
        if (this.energia > 0) {this.energia += energiaRecuperada;};
        if (this.energia > 100) {this.energia = 100;};
    },
    perderVida : function (vida) {
        if (this.vidas > 1) {
            this.vidas -= vida;
            this.energia = 100;
        } else {
            console.log('Perdiste pero te damos 3 vidas!!!')
            this.vidas = 3;
            this.energia = 100;
        };
    },
    recuperarVida : function (vidaRecuperada) {
        this.vidas += vidaRecuperada;
        if (this.vidas > 99) {
            this.vidas = 99;
        };
    }
}

jugador.nombre = 'Daniel'

jugador.perderVida(1);
console.log(`El jugador ${jugador.nombre} tiene ${jugador.energia}% de energía y ${jugador.vidas} vidas`);

jugador.perderEnergia(10);
console.log(`El jugador ${jugador.nombre} tiene ${jugador.energia}% de energía y ${jugador.vidas} vidas`);

jugador.perderEnergia(5);
console.log(`El jugador ${jugador.nombre} tiene ${jugador.energia}% de energía y ${jugador.vidas} vidas`);

jugador.perderEnergia(15);
console.log(`El jugador ${jugador.nombre} tiene ${jugador.energia}% de energía y ${jugador.vidas} vidas`);

jugador.perderEnergia(20);
console.log(`El jugador ${jugador.nombre} tiene ${jugador.energia}% de energía y ${jugador.vidas} vidas`);

jugador.recuperarEnergia(10);
console.log(`El jugador ${jugador.nombre} tiene ${jugador.energia}% de energía y ${jugador.vidas} vidas`);

jugador.perderEnergia(30);
console.log(`El jugador ${jugador.nombre} tiene ${jugador.energia}% de energía y ${jugador.vidas} vidas`);

jugador.perderEnergia(40);
console.log(`El jugador ${jugador.nombre} tiene ${jugador.energia}% de energía y ${jugador.vidas} vidas`);

jugador.perderVida(1);
console.log(`El jugador ${jugador.nombre} tiene ${jugador.energia}% de energía y ${jugador.vidas} vidas`);

jugador.perderVida(1);
console.log(`El jugador ${jugador.nombre} tiene ${jugador.energia}% de energía y ${jugador.vidas} vidas`);

jugador.recuperarVida(1);
console.log(`El jugador ${jugador.nombre} tiene ${jugador.energia}% de energía y ${jugador.vidas} vidas`);

jugador.recuperarVida(1);
console.log(`El jugador ${jugador.nombre} tiene ${jugador.energia}% de energía y ${jugador.vidas} vidas`);

jugador.recuperarVida(1);
console.log(`El jugador ${jugador.nombre} tiene ${jugador.energia}% de energía y ${jugador.vidas} vidas`);

jugador.perderVida(1);
console.log(`El jugador ${jugador.nombre} tiene ${jugador.energia}% de energía y ${jugador.vidas} vidas`);