function sentenciaWhileIncremento() {
    var inicio = 1;

    while(inicio <= 10){
        document.write("El valor actual de inicio es: " + inicio + "<br/>");

        inicio++;
    }
}

function sentenciaWhileDecremento() {
    var principio = 10;
    var suma = 0;

    while(principio >= 1){
        document.write("El valor actual de principio es: " + principio + "<br/>");

        suma += principio;
        principio--;
    }

    document.write("El valor de suma es: " + suma + "<br/>");
}