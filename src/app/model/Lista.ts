import { ItemLista } from "./ItemLista";

export class Lista {
    public id: null | number = null;
    public data: Date = new Date;
    public nomeMercado: string = "";
    public valorTotal: number = 0;
    public status: number = 0;
    public itens: ItemLista[] = [];
    
}