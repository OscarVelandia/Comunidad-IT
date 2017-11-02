let obtenerIDUsuario = () => IdDeUsuario  
//No agrego return ni corchetes porque en ES6 no es necesario en este caso.

let usuarioValido = () => {
    if(obtenerIDUsuario() > 30){
        console.log('El usuario es valido');        
    } else {
        console.log('El usuario no es valido');        
    }
}

usuarioValido();