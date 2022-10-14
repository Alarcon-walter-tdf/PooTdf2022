
/*Importar todo de la libreria d3-array */

/*Instaciomos un arreglo para usar la libreria */

import * as d3 from 'd3-array';

let numeros: number[] = [7, 65, 83, 124, 6, 15];

console.log('-------------');
console.log('Arreglo: ' + numeros);
console.log('-------------');
console.log('Minimo: ' + d3.min(numeros));
console.log('Maximo: ' + d3.max(numeros));
console.log('Promedio: ' + d3.mean(numeros));