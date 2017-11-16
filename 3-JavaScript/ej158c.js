function ordenarPorPrecio(juegos, orden){
    if (orden === 'ASC') {
        return juegos.sort((a, b) => a.precio - b.precio);
    }

    if (orden === 'DES') {
        return juegos.sort((a, b) => b.precio - a.precio);
    }
    return juegos;
};

function imprimir(juego){ 
    console.log(`${juego.nombre}\n$${juego.precio}\n${juego.cantidadVendida} Vendidos\n${juego.localidad}\n`);
}

function filtrarPorZona(juegos, zona){
    if (zona !== null) {
        return juegos.filter(juego => {
            switch (zona) {
                case 1:
                    return juego.localidad === 'Capital Federal';
                case 2:
                    return juego.localidad === 'Santa Fe';
                case 3:
                    return juego.localidad === 'Buenos Aires';
            }
            return true;
        })
    }
    return juegos;
}

function filtrarPorZonaYOrdenarPorPrecio(juegos, zona, orden){
    return ordenarPorPrecio(filtrarPorZona(juegos, zona), orden);
}

const juegosFiltradosYOrdendos = filtrarPorZonaYOrdenarPorPrecio(juegos, zona, orden);
juegosFiltradosYOrdendos.forEach((juego) => imprimir(juego)); 