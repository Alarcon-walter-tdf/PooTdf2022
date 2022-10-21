class Autox{

    private marca:string;
    private modelo:string;
    private patente:string;

    constructor(marcaParam:string,modeloParam:string,patenteParam:string){
        this.marca = marcaParam;
        this.modelo = modeloParam;
        this.patente = patenteParam;
    }

    //Getters y Setters.

    public getMarca():string{
        return this.marca;
    }

    public setMarca(pMarca:string):void{
        this.marca= pMarca;
    }

    public getModelo():string{
        return this.modelo;
    }

    public setModelo(pModelo:string):void{
        this.modelo = pModelo;
    }

    public getPatente():string{
        return this.patente;
    }

    public setPatente(pPatente:string):void{
        this.patente = pPatente;
    }

}

//*Crendo objeto de registro automotor
class RegistroAutomotor{
    
    private listadoDeAutos: Autox[];

    constructor(parametroArregloDeAutos:Autox[]){
        this.listadoDeAutos = parametroArregloDeAutos;

    }

    /* Metodo Buscar */
    public buscarAuto(autoParam:Autox):string{

        //guardando la pantente del auto a buscar
        let patenteABuscar = autoParam.getPatente();

        //variable de posicion
        let posicion:number =-1;
        let respuestaBuscarAuto:string = "El auto con la patente "+patenteABuscar+" no esta registrado";

        for(let i:number=0; i < this.listadoDeAutos.length; i++ ){
            if( patenteABuscar === this.listadoDeAutos[i].getPatente()){
                posicion = i;
            }
        }

        if(posicion != -1){
            respuestaBuscarAuto = "El auto con la "+patenteABuscar+" esta registrado en la posicion "+ posicion;

        }
        return respuestaBuscarAuto;

    }
    
    /*Metodo registrar un nuevo vehiculo */
    public registrarVehiculo(paramAuto:Autox):void{

        this.listadoDeAutos.push(paramAuto);
    
    }

    /*Editar un vehiculo apartir de la posicion*/
    editarVehiculo(posicion:number,marcaParametro:string,patenteParametro:string):void{
        this.listadoDeAutos[posicion].setMarca(marcaParametro);
        this.listadoDeAutos[posicion].setPatente(patenteParametro);
        
    }

    /*Metodo eliminar */
    eliminarVehiculo(paramAuto:Autox):void{
        for(let i:number = 0;i<this.listadoDeAutos.length;i++){
            if(this.listadoDeAutos[i].getPatente() === paramAuto.getPatente()){
                this.listadoDeAutos.splice(i,1); 
            }
        }
    }    


//Listando mi registro para verificar si se elimina o agrega un vehiculo
    public listaDeVehiculos():void{

        for(let i:number = 0; i < this.listadoDeAutos.length; i++){
            console.log("Vehiculo "+ (i+1) +"° Marca: "+  this.listadoDeAutos[i].getMarca() + " Modelo: "+this.listadoDeAutos[i].getModelo()+" Patente: " + this.listadoDeAutos[i].getPatente());

        }
    }

}

/* Creando objetos de la clase auto */

let autoDeMarcos = new Autox("Ford","Fiesta", "KKDD45");
let autoDeMelina = new Autox("VW","Gol", "DWFD986");
let autoDeJose = new Autox("Chevrolet","Astra", "CVOD23");

let arregloDeAutosPararegistrarEnTDF:Autox[] = [autoDeMelina,autoDeJose,autoDeMarcos];

let regidtroAutomotorDeTierraDelFuego = new RegistroAutomotor(arregloDeAutosPararegistrarEnTDF);


console.log("############ Listando mi Registro ##################");

/*Listado */
regidtroAutomotorDeTierraDelFuego.listaDeVehiculos();

console.log("############ Buscar un Auto ##################");

/* Auto a buscar */
let autoABuscar = new Autox("Chevrolet","Astra","CVOD23");
let registrado = regidtroAutomotorDeTierraDelFuego.buscarAuto(autoABuscar);

console.log(registrado);

console.log("############ Registrando ##################");

/*Creando un nuevo auto */
let autoDeWalter = new Autox("Audi","W200", "KLA566");

/*Agregando a la lista */
regidtroAutomotorDeTierraDelFuego.registrarVehiculo(autoDeWalter);

/*Revisando si se agrego el auto */
regidtroAutomotorDeTierraDelFuego.listaDeVehiculos();

console.log("######### Editando #####################");
/*Editando modelo y patente de un vehiculo con la posicion que esta en el arreglo */
regidtroAutomotorDeTierraDelFuego.editarVehiculo(3,"Audi-V2","AAAAA1");

/*Revisando si se agrego el auto */
regidtroAutomotorDeTierraDelFuego.listaDeVehiculos();

console.log("######### Eliminado #####################");
/*Editando modelo y patente de un vehiculo con la posicion que esta en el arreglo */
regidtroAutomotorDeTierraDelFuego.eliminarVehiculo(autoDeJose);
regidtroAutomotorDeTierraDelFuego.eliminarVehiculo(autoDeMarcos);

/*Revisando si se elimino */
regidtroAutomotorDeTierraDelFuego.listaDeVehiculos();