/*Re implementando la clase ImpresoraMultifuncion 
y aplicando encapsulamiento */

class Impresora{
    //atributos 
    private modelo : string; 
    private estadoPrendido: boolean;
    private imprimeColor: boolean;
    private escaneaColor: boolean;
    private fotocopiaColor: boolean;
    private nivelTinta: number;
    private cantidadHojas:number;
    private estadoWifi:boolean;

    //Cosntructor
    constructor(modeloParam:string,estadoPrendidoParam:boolean,imprimeColorParam: boolean,escaneaColorParam:boolean,fotocopiaColorParam:boolean,nivelTintaParam:number,cantidadHojasParam:number,estadoWifiParam:boolean){

        this.modelo = modeloParam; 
        this.estadoPrendido =  estadoPrendidoParam;
        this.imprimeColor = imprimeColorParam;
        this.escaneaColor = escaneaColorParam;
        this.fotocopiaColor = fotocopiaColorParam;
        this.nivelTinta = nivelTintaParam;
        this.cantidadHojas = cantidadHojasParam;
        this.estadoWifi = estadoWifiParam;

    }
    
    /*getter y setter */

    public getModelo():string{
        return this.modelo;
    }

    public setModelo(pModelo:string):void{
        this.modelo = pModelo;
    }

    public getEstadoPrendido():boolean{
        return this.estadoPrendido;
    }

    public setEstadoPrendido(pEstadoPrendido:boolean):void{
        this.estadoPrendido = pEstadoPrendido;
    }

    public getImprimeColor():boolean{
        return this.imprimeColor;
    }

    public setImprimeColor(pImprimeColor:boolean):void{
        this.imprimeColor = pImprimeColor;
    }

    public getEscaneaColor():boolean{
        return this.escaneaColor;
    }

    public setEscaneaColor(pEscaneaColor:boolean):void{
        this.escaneaColor = pEscaneaColor;
    }

    public getFotocopiaColor():boolean{
        return this.fotocopiaColor;
    }

    public setFotocopiaColor(pFotocopiaColor:boolean):void{
        this.fotocopiaColor = pFotocopiaColor;
    }

    public getNivelTinta():number{
        return this.nivelTinta;
    }

    public setNivelTinta(pNivelTinta:number):void{
        this.nivelTinta = pNivelTinta;
    }

    public getCantidadHojas():number{
        return this.cantidadHojas;
    }

    public setCantidadHojas(pCantidadHojas:number):void{
        this.cantidadHojas = pCantidadHojas;
    }

    public getEstadoWifi():boolean{
        return this.estadoWifi;
    }

    public setEstadoWifi(pEstadoWifi:boolean):void{
        this.estadoWifi = pEstadoWifi;
    }

    toString():string{
        let respuesta:string = "Modelo: "+this.getModelo()+" | Encendido: "+this.getEstadoPrendido()+" | Imprime a color: "+ this.getImprimeColor()+" | Escanea a color: "+ this.getEscaneaColor()+" | Fotocopia a color: "+ this.getFotocopiaColor()+" | Nivel de tinta: " + this.getNivelTinta()+" | Cantidad de hojas: "+ this.getNivelTinta()+" | Wifi: "+ this.getEstadoWifi();

        return respuesta;
    }

    //funcionalidades de mi impresora
    imprimir():string{
        let respuestaImprimir:string= "Imprimiendo a color...";
        if(this.getImprimeColor() != true){
            respuestaImprimir= "Imprimiendo blanco y negro..."
        }
        return respuestaImprimir;
    }

    escanear():string{
        let respuestaEscanear:string= "Escaneando a color...";
        if(this.getEscaneaColor() != true){
            respuestaEscanear= "Escaneando en blanco y negro..."
        }
        return respuestaEscanear;
    }

    fotocopiar():string{
        let respuestaFotocopiar:string= "Fotocopiando a color...";
        if(this.getFotocopiaColor() != true){
            respuestaFotocopiar= "Fotocopiando en blanco y negro..."
        }
        return respuestaFotocopiar;
    }

    estadoHojas():string{
        let respuestaEstadoHojas:string = "Cantidad: "+this.getCantidadHojas()+" hojas";
        if(this.getCantidadHojas() <= 3){
            respuestaEstadoHojas= "Recargar hojas quedan "+ this.getCantidadHojas();
        }
        return respuestaEstadoHojas;
    }

    estadoTinta():string{
        let respuestaTinta:string = "Nivel tinta: "+this.getNivelTinta()+"%";
        if(this.getCantidadHojas() <= 5){
            respuestaTinta= "Recargar tinta queda "+this.getNivelTinta()+"%";
        }
        return respuestaTinta;
    }

}

//instanciando un objeto 
let impresoraUno = new Impresora("Epson-YSKHJ98",false,true,false,false,3,2,false);



//Probando los metodos
console.log(impresoraUno.toString());

console.log(impresoraUno.imprimir());

console.log(impresoraUno.escanear());
console.log(impresoraUno.fotocopiar());
console.log(impresoraUno.estadoHojas());
console.log(impresoraUno.estadoTinta());

