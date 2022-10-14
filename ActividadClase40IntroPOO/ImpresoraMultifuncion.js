/*
Representacion de mi objeto

Impresora
    funciones
        prenderApagar
        imprimirBlancoNegro
        imprimirColor
        fotocopiaBlancoNegro
        fotocopiaColor
        escanearBlancoNegro
        escanearColor
    estado
        estaPrendido
        imprimeColor
        fotocopiaBlancoNegro
        escaneaColor
        nivelTinta
        cantidadHojas

*/
var ImpresoraM = /** @class */ (function () {
    //Cosntructor
    function ImpresoraM(modelo, estadoPrendido, imprimeColor, escaneaColor, fotocopiaColor, nivelTinta, cantidadHojas, estadoWifi) {
        this.modelo = modelo;
        this.estadoPrendido = estadoPrendido;
        this.imprimeColor = imprimeColor;
        this.escaneaColor = escaneaColor;
        this.fotocopiaColor = fotocopiaColor;
        this.nivelTinta = nivelTinta;
        this.cantidadHojas = cantidadHojas;
        this.estadoWifi = estadoWifi;
    }
    //funcionalidades
    ImpresoraM.prototype.imprimir = function () {
        console.log("Imprimiendo a Color");
    };
    ImpresoraM.prototype.escanear = function () {
        console.log("Escaneando en Blanco y Negro");
    };
    ImpresoraM.prototype.fotocopiar = function () {
        console.log("Fotocopiando en Blanco y Negro");
    };
    ImpresoraM.prototype.cargarHoja = function () {
        console.log("Cargando hojas en la Impresora..");
    };
    ImpresoraM.prototype.cambiarTinta = function () {
        console.log("Cambiando tintas...");
    };
    return ImpresoraM;
}());
//instanciando un objeto 
var miImpresora = new ImpresoraM("Epson-YSKHJ98", true, true, false, false, 65, 10, false);
//Usando una funcion de mi objeto 
miImpresora.imprimir();
console.log(miImpresora.modelo);
console.log('Cantidad de Hojas:' + miImpresora.cantidadHojas);
