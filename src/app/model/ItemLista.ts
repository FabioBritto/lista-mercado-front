import { Lista } from "./Lista";
import { Produto } from "./Produto";

export class ItemLista {
    public numSequencia: null | number =  null;
    public quantidade: number = 0;
    public precoTotal: number = 0;
    public concluido: number = 0;
    public produto: Produto = new Produto();
    public lista: Lista = new Lista();
}