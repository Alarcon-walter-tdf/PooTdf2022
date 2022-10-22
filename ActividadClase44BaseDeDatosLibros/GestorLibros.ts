import { Libro } from "./Libro";

export class GestorLibros{

    private listadoLibros: Libro[];

    constructor( paramListaLibros:Libro[]){
        this.listadoLibros = paramListaLibros;

    }

    public insertarLibro(paramLibro:Libro):void{

        this.listadoLibros.push(paramLibro);
    
    }

    public registroDeLibros():string{

        let registroTotal:string= "No se cargaron libros";
        let cantidadLibros:number = this.listadoLibros.length;

        /* */
        if( cantidadLibros > 0 ){
            registroTotal=" ";
            
            for(let i:number = 0; i < this.listadoLibros.length; i++){

                registroTotal = registroTotal +" \n "+ this.listadoLibros[i].toString();

                }   
        }

        return registroTotal;

    }

    public consultarPorCodigo(pCodigo:string):string{

        //variable de posicion
        let posicionLibro:number =-1;
        let respuestaBuscarAuto:string = "El libro con el codigo: '"+pCodigo+"' no esta registrado";

        for(let i:number=0; i < this.listadoLibros.length; i++ ){
            if( pCodigo === this.listadoLibros[i].getCodigo()){
                posicionLibro = i;
            }
        }

        if(posicionLibro != -1){
            respuestaBuscarAuto = "El Libro con el Codigo '"+pCodigo+"' esta registrado \n #### INformacion #### \n"+ this.listadoLibros[posicionLibro].toString();

        }
        return respuestaBuscarAuto;


    }

}