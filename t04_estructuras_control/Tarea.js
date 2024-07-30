function sentenciaSwitch(){
    var repetir;
    do {
    var opcion = prompt("1.Suma\n2.Resta\n3.Multiplicación\n4.Divisón\nSelecciona una opción del menú:", "selecciona una opción");

    if(isNaN(opcion)){
        alert("El valor ingresado no es un número");
    }else{
        switch(opcion){
            case "1":
                alert("La opción seleccionada es Suma");
                var numero1 = parseInt(prompt("Ingresa el primer número:", "número 1"));
                var numero2 = parseInt(prompt("Ingresa el segundo número:", "número 2"));

                var suma = numero1 + numero2;
                alert("El resultado de la suma es: " + suma);
                break;
            case "2":
                alert("La opción seleccionada es Resta");
                var numero1 = parseInt(prompt("Ingresa el primer número:", "número 1"));
                var numero2 = parseInt(prompt("Ingresa el segundo número:", "número 2"));

                var resta = numero1 - numero2;
                alert("El resultado de la resta es: " + resta);
                break;
            case "3":
                alert("La opción seleccionada es Multiplicación");
                var numero1 = parseInt(prompt("Ingresa el primer número:", "número 1"));
                var numero2 = parseInt(prompt("Ingresa el segundo número:", "número 2"));

                var multiplicar = numero1 * numero2;
                alert("El resultado de la suma es: " + multiplicar);
                break;
            case "4":
                alert("La opción seleccionada es División");
                var numero1 = parseInt(prompt("Ingresa el primer número:", "número 1"));
                var numero2 = parseInt(prompt("Ingresa el segundo número:", "número 2"));

                var dividir = numero1 / numero2;
                alert("El resultado de la suma es: " + dividir)
                break;
            default:
                alert("La opción seleccionada es incorrecta");
                break;
        }
    }
    repetir = prompt("¿Desea realizar otra suma(S/N):?", "ingresa tu respuesta");
}while (repetir == "S" || repetir == "s") 
    document.write("El programa finalizó con éxito.");
} 