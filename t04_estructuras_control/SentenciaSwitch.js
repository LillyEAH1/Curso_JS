function sentenciaSwitch(){
    var opcion = prompt("1.Suma\n2.Resta\n3.Multiplicación\n4.Divisón\nSelecciona una opción del menú:", "selecciona una opción");

    if(isNaN(opcion)){
        alert("El valor ingresado no es un número");
    }else{
        switch(opcion){
            case "1":
                alert("La opción seleccionada es Suma");
                break;
            case "2":
                alert("La opción seleccionada es Resta");
                break;
            case "3":
                alert("La opción seleccionada es Multiplicación");
                break;
            case "4":
                alert("La opción seleccionada es División");
                break;
            default:
                alert("La opción seleccionada es incorrecta");
                break;
        }
    }
}