"use strict";
exports.__esModule = true;
exports.GestorLibros = void 0;
var GestorLibros = /** @class */ (function () {
    function GestorLibros(paramListaLibros) {
        this.listadoLibros = paramListaLibros;
    }
    GestorLibros.prototype.insertarLibro = function (paramLibro) {
        this.listadoLibros.push(paramLibro);
    };
    GestorLibros.prototype.registroDeLibros = function () {
        var registroTotal = "No se cargaron libros";
        var cantidadLibros = this.listadoLibros.length;
        /* */
        if (cantidadLibros > 0) {
            registroTotal = " ";
            for (var i = 0; i < this.listadoLibros.length; i++) {
                registroTotal = registroTotal + " \n " + this.listadoLibros[i].toString();
            }
        }
        return registroTotal;
    };
    GestorLibros.prototype.consultarPorCodigo = function (pCodigo) {
        //variable de posicion
        var posicionLibro = -1;
        var respuestaBuscarAuto = "El libro con el codigo: '" + pCodigo + "' no esta registrado";
        for (var i = 0; i < this.listadoLibros.length; i++) {
            if (pCodigo === this.listadoLibros[i].getCodigo()) {
                posicionLibro = i;
            }
        }
        if (posicionLibro != -1) {
            respuestaBuscarAuto = "El Libro con el Codigo '" + pCodigo + "' esta registrado \n #### INformacion #### \n" + this.listadoLibros[posicionLibro].toString();
        }
        return respuestaBuscarAuto;
    };
    return GestorLibros;
}());
exports.GestorLibros = GestorLibros;
