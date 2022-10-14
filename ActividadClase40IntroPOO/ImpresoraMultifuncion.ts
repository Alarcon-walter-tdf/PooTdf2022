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

class ImpresoraM{
    //atributos o estados
    modelo : string; 
    estadoPrendido: boolean;
    imprimeColor: boolean;
    escaneaColor: boolean;
    fotocopiaColor: boolean;
    nivelTinta: number;
    cantidadHojas:number;
    estadoWifi:boolean;

    //Cosntructor
    constructor(modelo:string,estadoPrendido:boolean,imprimeColor: boolean,escaneaColor:boolean,fotocopiaColor:boolean,nivelTinta:number,cantidadHojas:number,estadoWifi:boolean){

        this.modelo = modelo; 
        this.estadoPrendido =  estadoPrendido;
        this.imprimeColor = imprimeColor;
        this.escaneaColor = escaneaColor;
        this.fotocopiaColor = fotocopiaColor;
        this.nivelTinta = nivelTinta;
        this.cantidadHojas = cantidadHojas;
        this.estadoWifi = estadoWifi;

    }

    //funcionalidades
    imprimir(){
        console.log("Imprimiendo a Color")
    }

    escanear(){
        console.log("Escaneando en Blanco y Negro")
    }

    fotocopiar(){
        console.log("Fotocopiando en Blanco y Negro")
    }

    cargarHoja(){
        console.log("Cargando hojas en la Impresora..")
    }

    cambiarTinta(){
        console.log("Cambiando tintas...")
    }

}

//instanciando un objeto 
let miImpresora = new ImpresoraM("Epson-YSKHJ98",true,true,false,false,65,10,false);

//Usando una funcion de mi objeto 
miImpresora.imprimir();

console.log(miImpresora.modelo);
console.log('Cantidad de Hojas:'+ miImpresora.cantidadHojas);

