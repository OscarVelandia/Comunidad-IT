let usuario = {
    username: 'batman',
    password: 'Alfred1960KPO!'
};

let autenticarUsuario = (nombreDeUsuario, clave) => {
    if (nombreDeUsuario === 'batman' && clave === 'Alfred1960KPO!'){
        console.log(usuario);
    } else {
        console.log('Usuario no autenticado');
    }
};

autenticarUsuario('batman', 'Alfred1960KPO!')