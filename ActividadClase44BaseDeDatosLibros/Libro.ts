
export class Libro{

    private codigo:string;
    private titulo:string;
    private autor:string;
    private numPaginas:number;


    constructor(paramCodigo:string,paramTitulo:string,paramAutor:string,paramNumPaginas:number){

        this.codigo = paramCodigo;
        this.titulo = paramTitulo;
        this.autor = paramAutor;
        this.numPaginas = paramNumPaginas;

    }


    public getCodigo():string{
        return this.codigo;
    }

    public setCodigo(pCodigo:string):void{

        this.codigo = pCodigo;
    }

    public getTitulo():string{
        return this.titulo;
    }

    public setTitulo(pTitulo):void{
        this.titulo = pTitulo;
    }
    
    public getAutor():string{
        return this.autor;
    }

    public setAutor(pAutor):void{
        this.autor = pAutor;
    }

    public getNumPaginas():number{
        return this.numPaginas;
    }

    public setNumPaginas(pNumPaginas):void{
        this.numPaginas = pNumPaginas;
    }

    public toString(){
        return "Libro cod. '"+ this.getCodigo() + "' \n Titulo: "+ this.getTitulo()+ "\n Autor: "+this.getAutor()+"\n Paginas: "+ this.getNumPaginas();

    }

}