"use strict";
exports.__esModule = true;
/* Importando la libreria ascii-art que se instalo  */
var AsciiArt = require("ascii-art");
/*Provando libreria*/
AsciiArt.font("Alarcon - TDF", 'Doom', function (err, renderer) {
    console.log(err || renderer);
});
