function numeros() {
    var repetir;
    do {
    var cantidad = parseInt(prompt("Ingresa la cantidad de números a evaluar: "));

    for (var i = 1; i <= cantidad; i++) {
        var numero = parseInt(prompt("Ingresa el número " + i + " de " + cantidad));   
        
        if (numero%2 == 0) {
            var par = "par";
        }else{
             par = "impar"
        }
        alert("El numero " + numero + " es " + par );
    }

        repetir = prompt("¿Desea realizar otra comparación(S/N):?", "ingresa tu respuesta");
    }while (repetir == "S" || repetir == "s");
        document.write("El programa finalizó con éxito.");
}


