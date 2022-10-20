/*Re implementando la clase ImpresoraMultifuncion
y aplicando encapsulamiento */
var Impresora = /** @class */ (function () {
    //Cosntructor
    function Impresora(modeloParam, estadoPrendidoParam, imprimeColorParam, escaneaColorParam, fotocopiaColorParam, nivelTintaParam, cantidadHojasParam, estadoWifiParam) {
        this.modelo = modeloParam;
        this.estadoPrendido = estadoPrendidoParam;
        this.imprimeColor = imprimeColorParam;
        this.escaneaColor = escaneaColorParam;
        this.fotocopiaColor = fotocopiaColorParam;
        this.nivelTinta = nivelTintaParam;
        this.cantidadHojas = cantidadHojasParam;
        this.estadoWifi = estadoWifiParam;
    }
    /*getter y setter */
    Impresora.prototype.getModelo = function () {
        return this.modelo;
    };
    Impresora.prototype.setModelo = function (pModelo) {
        this.modelo = pModelo;
    };
    Impresora.prototype.getEstadoPrendido = function () {
        return this.estadoPrendido;
    };
    Impresora.prototype.setEstadoPrendido = function (pEstadoPrendido) {
        this.estadoPrendido = pEstadoPrendido;
    };
    Impresora.prototype.getImprimeColor = function () {
        return this.imprimeColor;
    };
    Impresora.prototype.setImprimeColor = function (pImprimeColor) {
        this.imprimeColor = pImprimeColor;
    };
    Impresora.prototype.getEscaneaColor = function () {
        return this.escaneaColor;
    };
    Impresora.prototype.setEscaneaColor = function (pEscaneaColor) {
        this.escaneaColor = pEscaneaColor;
    };
    Impresora.prototype.getFotocopiaColor = function () {
        return this.fotocopiaColor;
    };
    Impresora.prototype.setFotocopiaColor = function (pFotocopiaColor) {
        this.fotocopiaColor = pFotocopiaColor;
    };
    Impresora.prototype.getNivelTinta = function () {
        return this.nivelTinta;
    };
    Impresora.prototype.setNivelTinta = function (pNivelTinta) {
        this.nivelTinta = pNivelTinta;
    };
    Impresora.prototype.getCantidadHojas = function () {
        return this.cantidadHojas;
    };
    Impresora.prototype.setCantidadHojas = function (pCantidadHojas) {
        this.cantidadHojas = pCantidadHojas;
    };
    Impresora.prototype.getEstadoWifi = function () {
        return this.estadoWifi;
    };
    Impresora.prototype.setEstadoWifi = function (pEstadoWifi) {
        this.estadoWifi = pEstadoWifi;
    };
    Impresora.prototype.toString = function () {
        var respuesta = "Modelo: " + this.getModelo() + " | Encendido: " + this.getEstadoPrendido() + " | Imprime a color: " + this.getImprimeColor() + " | Escanea a color: " + this.getEscaneaColor() + " | Fotocopia a color: " + this.getFotocopiaColor() + " | Nivel de tinta: " + this.getNivelTinta() + " | Cantidad de hojas: " + this.getNivelTinta() + " | Wifi: " + this.getEstadoWifi();
        return respuesta;
    };
    //funcionalidades
    Impresora.prototype.imprimir = function () {
        var respuestaImprimir = "Imprimiendo a color...";
        if (this.getImprimeColor() != true) {
            respuestaImprimir = "Imprimiendo blanco y negro...";
        }
        return respuestaImprimir;
    };
    Impresora.prototype.escanear = function () {
        var respuestaEscanear = "Escaneando a color...";
        if (this.getEscaneaColor() != true) {
            respuestaEscanear = "Escaneando en blanco y negro...";
        }
        return respuestaEscanear;
    };
    Impresora.prototype.fotocopiar = function () {
        var respuestaFotocopiar = "Fotocopiando a color...";
        if (this.getFotocopiaColor() != true) {
            respuestaFotocopiar = "Fotocopiando en blanco y negro...";
        }
        return respuestaFotocopiar;
    };
    Impresora.prototype.estadoHojas = function () {
        var respuestaEstadoHojas = "Cantidad: " + this.getCantidadHojas() + " hojas";
        if (this.getCantidadHojas() <= 3) {
            respuestaEstadoHojas = "Recargar hojas quedan " + this.getCantidadHojas();
        }
        return respuestaEstadoHojas;
    };
    Impresora.prototype.estadoTinta = function () {
        var respuestaTinta = "Nivel tinta: " + this.getNivelTinta() + "%";
        if (this.getCantidadHojas() <= 5) {
            respuestaTinta = "Recargar tinta queda " + this.getNivelTinta() + "%";
        }
        return respuestaTinta;
    };
    return Impresora;
}());
//instanciando un objeto 
var impresoraUno = new Impresora("Epson-YSKHJ98", false, true, false, false, 3, 2, false);
console.log(impresoraUno.toString());
console.log(impresoraUno.imprimir());
console.log(impresoraUno.escanear());
console.log(impresoraUno.fotocopiar());
console.log(impresoraUno.estadoHojas());
console.log(impresoraUno.estadoTinta());
//Usando una funcion de mi objeto 
/*miImpresora.imprimir();

console.log(miImpresora.modelo);
console.log('Cantidad de Hojas:'+ miImpresora.cantidadHojas);
console.log(miImpresora.modelo);
*/ 
