var Autox = /** @class */ (function () {
    function Autox(marcaParam, modeloParam, patenteParam) {
        this.marca = marcaParam;
        this.modelo = modeloParam;
        this.patente = patenteParam;
    }
    //Getters y Setters.
    Autox.prototype.getMarca = function () {
        return this.marca;
    };
    Autox.prototype.setMarca = function (pMarca) {
        this.marca = pMarca;
    };
    Autox.prototype.getModelo = function () {
        return this.modelo;
    };
    Autox.prototype.setModelo = function (pModelo) {
        this.modelo = pModelo;
    };
    Autox.prototype.getPatente = function () {
        return this.patente;
    };
    Autox.prototype.setPatente = function (pPatente) {
        this.patente = pPatente;
    };
    return Autox;
}());
//*Crendo objeto de registro automotor
var RegistroAutomotor = /** @class */ (function () {
    function RegistroAutomotor(parametroArregloDeAutos) {
        this.listadoDeAutos = parametroArregloDeAutos;
    }
    /* Metodo Buscar */
    RegistroAutomotor.prototype.buscarAuto = function (autoParam) {
        //guardando la pantente del auto a buscar
        var patenteABuscar = autoParam.getPatente();
        //variable de posicion
        var posicion = -1;
        var respuestaBuscarAuto = "El auto con la patente " + patenteABuscar + " no esta registrado";
        for (var i = 0; i < this.listadoDeAutos.length; i++) {
            if (patenteABuscar === this.listadoDeAutos[i].getPatente()) {
                posicion = i;
            }
        }
        if (posicion != -1) {
            respuestaBuscarAuto = "El auto con la " + patenteABuscar + " esta registrado en la posicion " + posicion;
        }
        return respuestaBuscarAuto;
    };
    /*Metodo registrar un nuevo vehiculo */
    RegistroAutomotor.prototype.registrarVehiculo = function (paramAuto) {
        this.listadoDeAutos.push(paramAuto);
    };
    /*Editar un vehiculo apartir de la posicion*/
    RegistroAutomotor.prototype.editarVehiculo = function (posicion, marcaParametro, patenteParametro) {
        this.listadoDeAutos[posicion].setMarca(marcaParametro);
        this.listadoDeAutos[posicion].setPatente(patenteParametro);
    };
    /*Metodo eliminar */
    RegistroAutomotor.prototype.eliminarVehiculo = function (paramAuto) {
        for (var i = 0; i < this.listadoDeAutos.length; i++) {
            if (this.listadoDeAutos[i].getPatente() === paramAuto.getPatente()) {
                this.listadoDeAutos.splice(i, 1);
            }
        }
    };
    //Listando mi registro para verificar si se elimina o agrega un vehiculo
    RegistroAutomotor.prototype.listaDeVehiculos = function () {
        for (var i = 0; i < this.listadoDeAutos.length; i++) {
            console.log("Vehiculo " + (i + 1) + "° Marca: " + this.listadoDeAutos[i].getMarca() + " Modelo: " + this.listadoDeAutos[i].getModelo() + " Patente: " + this.listadoDeAutos[i].getPatente());
        }
    };
    return RegistroAutomotor;
}());
/* Creando objetos de la clase auto */
var autoDeMarcos = new Autox("Ford", "Fiesta", "KKDD45");
var autoDeMelina = new Autox("VW", "Gol", "DWFD986");
var autoDeJose = new Autox("Chevrolet", "Astra", "CVOD23");
var arregloDeAutosPararegistrarEnTDF = [autoDeMelina, autoDeJose, autoDeMarcos];
var regidtroAutomotorDeTierraDelFuego = new RegistroAutomotor(arregloDeAutosPararegistrarEnTDF);
console.log("############ Listando mi Registro ##################");
/*Listado */
regidtroAutomotorDeTierraDelFuego.listaDeVehiculos();
console.log("############ Buscar un Auto ##################");
/* Auto a buscar */
var autoABuscar = new Autox("Chevrolet", "Astra", "CVOD23");
var registrado = regidtroAutomotorDeTierraDelFuego.buscarAuto(autoABuscar);
console.log(registrado);
console.log("############ Registrando ##################");
/*Creando un nuevo auto */
var autoDeWalter = new Autox("Audi", "W200", "KLA566");
/*Agregando a la lista */
regidtroAutomotorDeTierraDelFuego.registrarVehiculo(autoDeWalter);
/*Revisando si se agrego el auto */
regidtroAutomotorDeTierraDelFuego.listaDeVehiculos();
console.log("######### Editando #####################");
/*Editando modelo y patente de un vehiculo con la posicion que esta en el arreglo */
regidtroAutomotorDeTierraDelFuego.editarVehiculo(3, "Audi-V2", "AAAAA1");
/*Revisando si se agrego el auto */
regidtroAutomotorDeTierraDelFuego.listaDeVehiculos();
console.log("######### Eliminado #####################");
/*Editando modelo y patente de un vehiculo con la posicion que esta en el arreglo */
regidtroAutomotorDeTierraDelFuego.eliminarVehiculo(autoDeJose);
regidtroAutomotorDeTierraDelFuego.eliminarVehiculo(autoDeMarcos);
/*Revisando si se elimino */
regidtroAutomotorDeTierraDelFuego.listaDeVehiculos();
