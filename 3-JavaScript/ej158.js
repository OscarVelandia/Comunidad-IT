function filtrarPorZona (juegos, zona) {        
    // Con esta estructura de control filtro cada zona.
    if(zona !== null){
        //Con filter, creo un nuevo array con la caracteristica que quiera.
        return juegos.filter(juego => {
            switch (zona) {
                case 1:
                    return juego.localidad === 'Capital Federal'
                case 2:
                    return juego.localidad === 'Santa Fe'
                case 3:     
                    return juego.localidad === 'Buenos Aires'
            } 
        //Uso true para que evalue evalue hasta que encuentre la zona que pase como parámetro.
        return true;
        })
    }
    //en caso de que sea null, retornará el array de juegos sin filtrar.
    return juegos;  
};

//Esta función ordena por precio de forma Ascendente y Descendente
function ordenarPorPrecio (juegos, orden) {
    if (orden === 'ASC'){
        return juegos.sort((a, b) => a.precio - b.precio);
    } else if (orden === 'DES'){
        return juegos.sort((a, b) => b.precio - a.precio);
    }
    //En caso de no querer ordenar de ninguna manera retorna el listado completo de juegos en el orden del array.
    return juegos
};

//Esta función imprime con un formato específico.
function imprimir (juego) {
    console.log(`${juego.nombre}\n$${juego.precio}\n${juego.cantidadVendida} Vendidos\n${juego.localidad}\n`);
} 

const juegos = [
    {
        nombre: 'Gta V Ps4 Físico',
        precio: 1449,
        cantidadVendida: 82,
        localidad: 'Santa Fe',
    },
    {
        nombre: 'Crash Bandicoot N. Sane Trilogy Juego Ps4 Fisico Sellado',
        precio: 1060,
        cantidadVendida: 276,
        localidad: 'Capital Federal',
    },
    {
        nombre: 'Lego Marvel Super Heroes',
        precio: 700,
        cantidadVendida: 48,
        localidad: 'Capital Federal',
    },
    {
        nombre: 'Mortal Kombat Xl Ps4 Original Fisico Sellado Nuevo',
        precio: 1190,
        cantidadVendida: 348,
        localidad: 'Capital Federal',
    },
    {
        nombre: 'Gta V Ps4 Fisico Nuevo Sellado',
        precio: 1250,
        cantidadVendida: 445,
        localidad: 'Buenos Aires',
    },
    {
        nombre: 'Fifa 2017 Juego Físico Play 4 Nuevo!!!!!!',
        precio: 890,
        cantidadVendida: 182,
        localidad: 'Buenos Aires',
    },
    {
        nombre: 'Uncharted 4 Ps4 Fisico El Desenlace Del Ladrón Playstation 4',
        precio: 950,
        cantidadVendida: 517,
        localidad: 'Capital Federal',
    },
    {
        nombre: 'Mortal Kombat Xl Ps4 Cd Fisico Sellado Original !!!',
        precio: 940,
        cantidadVendida: 275,
        localidad: 'Capital Federal',
    },
    {
        nombre: 'Need For Speed Ps4 Físico Nuevo Sellado Playstation',
        precio: 790,
        cantidadVendida: 89,
        localidad: 'Capital Federal',
    },
    {
        nombre: 'Lego Batman',
        precio: 1000,
        cantidadVendida: 39,
        localidad: 'Capital Federal',
    },
    {
        nombre: 'Fifa 17 Ps4 Original Fisico 2017',
        precio: 1290,
        cantidadVendida: 310,
        localidad: 'Capital Federal',
    },
    {
        nombre: 'Resident Evil 7 Ps4 Biohazard Físico',
        precio: 1390,
        cantidadVendida: 154,
        localidad: 'Capital Federal',
    },
    {
        nombre: 'Dragon Ball Xv Xenoverse 2 Ps4 Fisico Nuevo Dbxv2',
        precio: 1390,
        cantidadVendida: 241,
        localidad: 'Capital Federal',
    }
]

function ordenarPorPrecioYOrdenarPorZona (juegos, precio, zona) {
    return filtrarPorZona(ordenarPorPrecio(juegos, precio), zona);
}

const filtrarPorPrecioYZona = ordenarPorPrecioYOrdenarPorZona(juegos, 'DES', 3)

filtrarPorPrecioYZonas.forEach(juego => imprimir(juego));