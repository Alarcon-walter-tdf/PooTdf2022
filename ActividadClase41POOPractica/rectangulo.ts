class Rectangulo{
    private base: number;
    private altura: number;

    constructor(paramBase:number, paramAltura:number){
        this.base = paramBase;
        this.altura = paramAltura;
    }

    /*getter y setter */
    public getBase():number{
        return this.base;
    }

    public setBase(pBase:number):void{
        this.base = pBase;
    }
    
    public getAltura():number{
        return this.altura;
    }

    public setAltura(pAltura:number):void{
        this.altura = pAltura;
    }


    /*funcionalidad de la clase */

    //Funcion calcular el area
    public calcularArea():number{
        let areaTotal:number = this.base * this.altura;
        return areaTotal;
    }

    //Funcion comparar con otro rectangulo
    public comparandoConOtro(paramOtroRectangulo:Rectangulo):number{
        let areaRectangulo:number = this.base * this.altura;
        let areaOtroRectagulo:number = paramOtroRectangulo.calcularArea();
        let resultado:number= -1;

        if(areaRectangulo > areaOtroRectagulo){
            resultado = 1;
          
        }else{
            if(areaRectangulo === areaOtroRectagulo){
                resultado = 0               
            }
        }
        return resultado;
    }

    //Funcion determinar si es un cuadrado
    public determinarSiEsCuadrado():string{
        
        let esONoEs:string= "No es cuadrado."
         
        if( this.base === this.altura){
            esONoEs = "Es cuadrado";
        }

        return esONoEs;
    };

    // Funcion determinar si esta acostado o parad
    public rectanguloAcostadoOParado():string{
        
        let acostadoOParado:string= "El rectangulo esta acostado."
         
        if( this.base < this.altura){
            acostadoOParado = "El rectangulo esta Parado";
        }

        return acostadoOParado;
    };

}

/* Instancionado rectangulos*/
let rectanguloUno = new Rectangulo(2,5);

let rectanguloDos = new Rectangulo( 5,8)


/*Motrando datos por consola*/
console.log( "Datos rectangulo 1");
console.log( "Base: "+ rectanguloUno.getBase());
console.log( "Altura: " + rectanguloUno.getAltura());

console.log("Area rectangulo 1: " + rectanguloUno.calcularArea());
console.log("Area rectangulo 2: " + rectanguloDos.calcularArea());

console.log("EL rectangulo es cuadrado?");
console.log("Resultado: " + rectanguloUno.determinarSiEsCuadrado());

console.log("El rectangulo esta acostado o parado?");
console.log(rectanguloUno.rectanguloAcostadoOParado());

console.log("Comparando con otro rectangulo(1 si es mayor, 0 son iguales y -1 si es menor)");
console.log("Comparando recatngulo 1 y 2: " + rectanguloUno.comparandoConOtro(rectanguloDos));
console.log("Comparando recatngulo 2 y 1: " + rectanguloDos.comparandoConOtro(rectanguloUno));
console.log("Comparando recatngulo 1 y 1: " + rectanguloUno.comparandoConOtro(rectanguloUno));