let propiedades = [nombre, precio, cantidadVendida, localidad]

const juegos = [
    {
        nombre: 'Crash Bandicoot N. Sane Trilogy Juego Ps4 Fisico Sellado',
        precio: 1060,
        cantidadVendida: 276,
        localidad: 'Capital Federal'
    },
    {
        nombre: 'Crash Bandicoot N. Sane Trilogy Juego Ps4 Fisico Sellado',
        precio: 1060,
        cantidadVendida: 276,
        localidad: 'Capital Federal'
    },
    {
        nombre: 'Lego Marvel Super Heroes',     
        precio: 700,
        cantidadVendida: 48,
        localidad: 'Capital Federal'
    },
    {
        nombre: 'Gta V Ps4 Físico',
        precio: 1449,
        cantidadVendida: 82,
        localidad: 'Santa Fe'
    }  
]

juegos.forEach(function(juego) {
    propiedades.forEach(function(propiedad) {
        console.log(juego[propiedad]);
    
    });
});