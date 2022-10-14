"use strict";
/*Importar todo de la libreria d3-array */
exports.__esModule = true;
/*Instaciomos un arreglo para usar la libreria */
var d3 = require("d3-array");
var numeros = [7, 65, 83, 124, 6, 15];
console.log('-------------');
console.log('Arreglo: ' + numeros);
console.log('-------------');
console.log('Minimo: ' + d3.min(numeros));
console.log('Maximo: ' + d3.max(numeros));
console.log('Promedio: ' + d3.mean(numeros));
