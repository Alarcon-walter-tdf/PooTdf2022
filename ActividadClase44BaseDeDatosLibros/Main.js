"use strict";
exports.__esModule = true;
var Libro_1 = require("./Libro");
var GestorLibros_1 = require("./GestorLibros");
var libro1 = new Libro_1.Libro("WWW52", "POO", "Java Web", 253);
var libro2 = new Libro_1.Libro("JKK87", "Typescript", "W. Script", 366);
/*Creando un arreglo de libros */
var arregloDeLibros = [libro1, libro2];
var registroDeLibrosEnGestor = new GestorLibros_1.GestorLibros(arregloDeLibros);
var libro3 = new Libro_1.Libro("OOP56", "Desarrollo We", "Leandro D.", 520);
registroDeLibrosEnGestor.insertarLibro(libro3);
console.log(registroDeLibrosEnGestor.registroDeLibros());
/*Codigo de libro no registrado */
var consultarLibro = "JK87";
console.log(registroDeLibrosEnGestor.consultarPorCodigo(consultarLibro));
/*Codigo de libro registrado */
var consultarLibro2 = "WWW52";
console.log(registroDeLibrosEnGestor.consultarPorCodigo(consultarLibro2));
