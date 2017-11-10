let usuario = {
    username: 'batman',
    password: 'Alfred1960KPO!'
};

//Le paso a la función un objeto y valido los datos del objeto, de esta manera obtengo un booleano
let autenticarUsuario = usuario => usuario.username === 'batman' && usuario.password === 'Alfred1960KPO!';

//Acá uso el booleano generado en la función anterior.
if (autenticarUsuario(usuario)){
    console.log(usuario);
} else {
    console.log('Usuario no autenticado');
};