function datos(){
    var nombre = prompt("Ingresa tu nombre completo: ");
    var calificacion1 = parseFloat(prompt("Ingresa tu primera calificación: "));
    var calificacion2 = parseFloat(prompt("Ingresa tu segunda calificación: " ));
    var calificacion3 = parseFloat(prompt("Ingresa tu tercer calificación: "));

    boleta(nombre, calificacion1, calificacion2, calificacion3);
}

function boleta(nombre, calificacion1, calificacion2, calificacion3){
    var promedio = (calificacion1+calificacion2+calificacion3) / 3;
    var aprob;

    if (promedio >= 7) {
        aprob = "aprobado";
    }else{
        aprob = "reprobado";
    }

    document.write("Alumno: " + nombre + "<br/>");
    document.write("Calificación 1: " + calificacion1 + "<br/>");
    document.write("Calificación 2: " + calificacion2 + "<br/>");
    document.write("Calificación 3: " + calificacion3 + "<br/>");
    document.write("Promedio: " + promedio + "<br/>");
    document.write("Estatus: " + aprob + "<br/>");
}



