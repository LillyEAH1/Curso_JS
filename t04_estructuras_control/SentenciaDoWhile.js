function sentenciaDoWhile(){
    var repetir;

    do{
        var numero1 = parseFloat(prompt("Ingresa el primer número:", "número 1"));
        var numero2 = parseFloat(prompt("Ingresa el segundo número:", "número 2"));

        var suma = numero1 + numero2;
        alert("El resultado de la suma es: " + suma);
        
        repetir = prompt("¿Desea realizar otra suma(S/N):?", "ingresa tu respuesta");
    }while (repetir == "S" || repetir == "s") 
        document.write("El programa finalizó con éxito.");
}