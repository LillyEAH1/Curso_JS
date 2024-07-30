function multiplicar() {
    var numero = parseFloat(prompt("Ingresa un número: "));
    var inicio = 1;
    var resultado;

    while (inicio <= 10) {

        resultado = numero * inicio;

        document.write(numero + "*" + inicio + "=" + resultado + "<br/>");
        inicio++;  
    }

}