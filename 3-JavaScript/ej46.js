let usuarioYPassword = 'pepito2017, 12345';
let nombreDeUsuario = usuarioYPassword.substr(0, 9);
let password = usuarioYPassword.substr(12,5);

console.log(`El usuario ${nombreDeUsuario} tiene ${password} como password`);