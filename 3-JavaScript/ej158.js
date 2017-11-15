const filtrarPorZonaYOrdenarPorPrecio = (zona, orden) => {
    //Con filter obtengo el array para trabajar.
    juegos.filter(juego => { 
        //Esta función imprime con un formato específico.
        const imprimir = () => console.log(`${juego.nombre}\n$${juego.precio}\n${juego.cantidadVendida} Vendidos\n${juego.localidad}\n`); 
        //Esta función ordena por precio de forma Ascendente y Descendente
        const ordenarPorPrecio = () => {
            if (orden === 'ASC'){
                juegos.sort((a, b) => a.precio - b.precio);
                imprimir();
            } else if (orden === 'DES'){
                juegos.sort((a, b) => b.precio - a.precio);
                imprimir();
            } else {
                imprimir();
            }
        };    
        // Con esta estructura de control filtro cada zona.
        if(zona !== null){
            switch (zona) {
                case 1:
                    if (juego.localidad === 'Capital Federal'){
                        ordenarPorPrecio()
                    }
                    break;
                case 2:
                    if (juego.localidad === 'Santa Fe'){
                        ordenarPorPrecio();
                    }
                    break;
                case 3:     
                    if (juego.localidad === 'Buenos Aires'){
                        ordenarPorPrecio();
                    }
                    break;
            } 
        } else {
            ordenarPorPrecio();
        }
    })  
};

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

filtrarPorZonaYOrdenarPorPrecio(1, null);