import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Lista } from '../model/Lista';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ListasService {

  /*
  * Para que eu possa fazer uso do meu service, preciso INJETAR A DEPENDÊNCIA
  * O que no Spring eu faria com @AutoWired, aqui eu declaro um atributo como parâmetro do construtor
  * A partir disso, o objeto "http" é visível pela classe toda
  */
  constructor(private http: HttpClient) { }

  /*
  * Ele retorna um get da URL, que neste caso, irá retornar uma Lista
  * O OBSERVABLE é o objeto do Angular que me permite monitorar sua mudança de estado/status(HttpStatus)
  */
  public recuperarListas() : Observable<Lista[]>{
    return this.http.get<Lista[]>(environment.urlAPI+"/listas");
  }

}
