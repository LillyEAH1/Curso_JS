function credenciales(){
    var usuario = prompt("Ingresa tu usuario: ", "ingresar usuario");
    var contraseña = parseInt(prompt("Ingresa tu contraseña: ", "ingresar contraseña"));

    var resultado = acceso(usuario, contraseña);

    document.write(resultado);
}

function acceso(usuario, contraseña){
    if(usuario == "lilly" && contraseña == 123){
        var access = "Acceso Correcto";
        return access;
    }else{
        var acceso = "Usuario o Contraseña Incorrectos";
        return acceso;
    }
}