let usuario = {
    username : null,
    password : null,
    saludar : function () {
        if(this.username != null){
            console.log(`Hola, soy el usuario ${this.username}`);
        } else {
            console.log('Este usuario no tiene username');
        }
    },
    updaterUsername : function (usuario) {return this.username = usuario},
    updatePassword : function (contrasenia) {return this.password = contrasenia}
};

console.log(usuario.updaterUsername('pedro'));
console.log(usuario.updatePassword(12345));
usuario.saludar();