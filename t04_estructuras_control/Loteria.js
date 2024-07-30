function juego(){
    var numero = parseInt(prompt("Ingresa un número entero del 1 al 10: "));    

    if (numero < 1 || numero >10) {
        document.write("El número ingresado deber estar entre 1 y 10");
    }else {
        var aleatorio = Math.floor(Math.random() * 10);
        
        if (numero == aleatorio){
            document.write(numero + " - " + "Ganaste" + " - " + aleatorio)
        }else{
            document.write(numero + " - " + "Perdiste" + " - " + aleatorio)
        }
    }
}