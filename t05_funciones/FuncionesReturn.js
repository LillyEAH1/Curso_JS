function datos(){
    var base = 5;
    var altura = 6;

    var area = calcularArea(base, altura);

    document.write("Base:" + base + "<br/>");
    document.write("Altura:" + altura + "<br/>");
    document.write("Area Triangulo:" + area + "<br/>");
}

function calcularArea(b, a){
    var areaT = b * a / 2;

    return areaT;
}