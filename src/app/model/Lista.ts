export class Lista {
    public id: number = 0;
    public data: Date = new Date;
    public nomeMercado: string = "";
    public valorTotal: number = 0;
    public status: number = 0;

    public constructor(){
        this.id = 0;
        this.data = new Date;
        this.nomeMercado = "";
    }
}