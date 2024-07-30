function sentenciaSencilla() {
    var numero = parseInt(prompt("Ingresa un número para realizar su tabla de multiplicar", "ingresa un número"));

    for(var i = 1; i <= 10; i++){
        var tabla = numero * i;
        document.write(numero + " * " + i + " = " + tabla + "<br/>");
    }
}

function sentenciaAnidada(){
    document.write("Tablas de multiplicar básicas: <br/>");

    for(var f = 1; f <= 10; f++){
        document.write("Tabla del " + f + "<br/>");
        for(var c = 1; c <= 10; c++){
            var tabla = f * c;
            document.write(f + " * " + c + " = " + tabla + "<br/>");
        }
    }
}