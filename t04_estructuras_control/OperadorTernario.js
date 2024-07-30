function operadorTernario(){
    var total = 500;

    var descuento = total >= 1 && total <= 500 ? (total * .10) : 
                    total >= 501 && total <= 1500 ? (total * .15) : 
                    total >= 1501 && total <= 2500 ? (total * .20) : (total * .30);
    
    document.write("El descuento por comprar un total de $" + total + " es de: $" + descuento);
}