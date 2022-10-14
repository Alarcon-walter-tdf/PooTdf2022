/* Importando la libreria ascii-art que se instalo  */
import * as AsciiArt from 'ascii-art';


/*Provando libreria*/

AsciiArt.font("Alarcon - TDF", 'Doom', (err, renderer) => {
    console.log(err || renderer)
})