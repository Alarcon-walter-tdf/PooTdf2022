import { Libro } from "./Libro";
import { GestorLibros } from "./GestorLibros";

let libro1 = new Libro("WWW52","POO","Java Web",253);
let libro2 = new Libro("JKK87","Typescript","W. Script",366);

/*Creando un arreglo de libros */
let arregloDeLibros:Libro[] = [libro1,libro2];

let registroDeLibrosEnGestor =  new GestorLibros(arregloDeLibros);

let libro3 = new Libro("OOP56","Desarrollo We","Leandro D.",520);

registroDeLibrosEnGestor.insertarLibro(libro3);

console.log(registroDeLibrosEnGestor.registroDeLibros());

/*Codigo de libro no registrado */
let consultarLibro:string = "JK87";

console.log(registroDeLibrosEnGestor.consultarPorCodigo(consultarLibro));

/*Codigo de libro registrado */
let consultarLibro2:string = "WWW52";

console.log(registroDeLibrosEnGestor.consultarPorCodigo(consultarLibro2));



