function datos(){
    var base = 5;
    var altura = 6;

    imprimir(base, altura);
}

function imprimir(b, a){
    var areaT = b * a / 2;

    document.write("Base:" + b + "<br/>");
    document.write("Altura:" + a + "<br/>");
    document.write("Area Triangulo:" + areaT + "<br/>");
}