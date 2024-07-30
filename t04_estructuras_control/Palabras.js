function palabra(){
    var  palabra = prompt("Ingresa una palabra: ");
    var cantidadLetras = palabra.length;
    /*document.write(cantidadLetras + "<br/>");*/

    salida(palabra, cantidadLetras);
}

function salida(palabra, cantidadLetras){
    document.write("La palabra " + palabra + " tiene " + cantidadLetras + " letras " + "<br/>");
    var inicio = 1;
    //var letra = 0;

    while (inicio <= palabra.length) {
        document.write(inicio + "." + palabra[inicio-1].toUpperCase() + "<br/>");

        //letra += 1;
        inicio++;
    }
}