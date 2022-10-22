"use strict";
exports.__esModule = true;
exports.Libro = void 0;
var Libro = /** @class */ (function () {
    function Libro(paramCodigo, paramTitulo, paramAutor, paramNumPaginas) {
        this.codigo = paramCodigo;
        this.titulo = paramTitulo;
        this.autor = paramAutor;
        this.numPaginas = paramNumPaginas;
    }
    Libro.prototype.getCodigo = function () {
        return this.codigo;
    };
    Libro.prototype.setCodigo = function (pCodigo) {
        this.codigo = pCodigo;
    };
    Libro.prototype.getTitulo = function () {
        return this.titulo;
    };
    Libro.prototype.setTitulo = function (pTitulo) {
        this.titulo = pTitulo;
    };
    Libro.prototype.getAutor = function () {
        return this.autor;
    };
    Libro.prototype.setAutor = function (pAutor) {
        this.autor = pAutor;
    };
    Libro.prototype.getNumPaginas = function () {
        return this.numPaginas;
    };
    Libro.prototype.setNumPaginas = function (pNumPaginas) {
        this.numPaginas = pNumPaginas;
    };
    Libro.prototype.toString = function () {
        return "Libro cod. '" + this.getCodigo() + "' \n Titulo: " + this.getTitulo() + "\n Autor: " + this.getAutor() + "\n Paginas: " + this.getNumPaginas();
    };
    return Libro;
}());
exports.Libro = Libro;
