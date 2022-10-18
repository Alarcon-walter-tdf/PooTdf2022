var Rectangulo = /** @class */ (function () {
    function Rectangulo(paramBase, paramAltura) {
        this.base = paramBase;
        this.altura = paramAltura;
    }
    /*getter y setter */
    Rectangulo.prototype.getBase = function () {
        return this.base;
    };
    Rectangulo.prototype.setBase = function (pBase) {
        this.base = pBase;
    };
    Rectangulo.prototype.getAltura = function () {
        return this.altura;
    };
    Rectangulo.prototype.setAltura = function (pAltura) {
        this.altura = pAltura;
    };
    /*funcionalidad de la clase */
    //Funcion calcular el area
    Rectangulo.prototype.calcularArea = function () {
        var areaTotal = this.base * this.altura;
        return areaTotal;
    };
    //Funcion comparar con otro rectangulo
    Rectangulo.prototype.comparandoConOtro = function (paramOtroRectangulo) {
        var areaRectangulo = this.base * this.altura;
        var areaOtroRectagulo = paramOtroRectangulo.calcularArea();
        var resultado = -1;
        if (areaRectangulo > areaOtroRectagulo) {
            resultado = 1;
        }
        else {
            if (areaRectangulo === areaOtroRectagulo) {
                resultado = 0;
            }
        }
        return resultado;
    };
    //Funcion determinar si es un cuadrado
    Rectangulo.prototype.determinarSiEsCuadrado = function () {
        var esONoEs = "No es cuadrado.";
        if (this.base === this.altura) {
            esONoEs = "Es cuadrado";
        }
        return esONoEs;
    };
    ;
    // Funcion determinar si esta acostado o parad
    Rectangulo.prototype.rectanguloAcostadoOParado = function () {
        var acostadoOParado = "El rectangulo esta acostado.";
        if (this.base < this.altura) {
            acostadoOParado = "El rectangulo esta Parado";
        }
        return acostadoOParado;
    };
    ;
    return Rectangulo;
}());
/* Instancionado rectangulos*/
var rectanguloUno = new Rectangulo(2, 5);
var rectanguloDos = new Rectangulo(5, 8);
/*Motrando datos por consola*/
console.log("Datos rectangulo 1");
console.log("Base: " + rectanguloUno.getBase());
console.log("Altura: " + rectanguloUno.getAltura());
console.log("Area rectangulo 1: " + rectanguloUno.calcularArea());
console.log("Area rectangulo 2: " + rectanguloDos.calcularArea());
console.log("EL rectangulo es cuadrado?");
console.log("Resultado: " + rectanguloUno.determinarSiEsCuadrado());
console.log("El rectangulo esta acostado o parado?");
console.log(rectanguloUno.rectanguloAcostadoOParado());
console.log("Comparando con otro rectangulo(1 si es mayor, 0 son iguales y -1 si es menor)");
console.log("Comparando recatngulo 1 y 2: " + rectanguloUno.comparandoConOtro(rectanguloDos));
console.log("Comparando recatngulo 2 y 1: " + rectanguloDos.comparandoConOtro(rectanguloUno));
console.log("Comparando recatngulo 1 y 1: " + rectanguloUno.comparandoConOtro(rectanguloUno));
