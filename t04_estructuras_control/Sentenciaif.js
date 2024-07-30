function sentenciaSencilla(){
    var edad = parseInt(prompt("Ingresa tu edad:","edad"));

    if(edad >= 18){
        document.write("Puedes tramitar tu licencia de manejo.");
    }else{
        document.write("Aún no puedes tramitar  tu licencia de manejo.");
    }
}

function sentenciaMultiple(){
    var estadoCivil = prompt("A.Soltera\nB.Casada\nC.Viuda\nD.Divorciada","estado civil");

    if (estadoCivil == "C" || estadoCivil == "D") {
        document.write("Recibirás el 100% de apoyo económico.");
    }else if (estadoCivil == "A") {
        document.write("Recibirás el 50% de apoyo económico.");
    }else{
        document.write("Recibirás el 10% de apoyo económico.");
    }
}

function sentenciaAnidada() {
    var placa = parseInt(prompt("Ingresa el número de terminación de tu placa","número de terminación de placa"));

    if(placa >=0 && placa <=9){
        if(placa == 5 || placa ==6){
            document.write("Tu auto no circula el día lunes.");
        }else if(placa == 7 || placa == 8){
            document.write("Tu auto no circula el día martes.");
        }else if (placa == 3 || placa == 4){
            document.write("Tu auto no circula el día miércoles.");
        }else if (placa == 1 || placa == 2){
            document.write("Tu auto no circula el día jueves.");
        }else{
            document.write("tu auto no circula el día viernes.");
        }
    }else{
        document.write("El número de terminación ingresado es incorrecto.");
    }
}