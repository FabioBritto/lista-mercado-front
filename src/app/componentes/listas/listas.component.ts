import { Component, OnInit } from '@angular/core';
import { Lista } from 'src/app/model/Lista';
import { ListasService } from 'src/app/servicos/listas.service';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.css']
})
export class ListasComponent implements OnInit {

  public listas: Lista[] = [];

  constructor(private service: ListasService) { }

  ngOnInit(): void {
    this.getAllListas()
  }

  public getAllListas(){
    this.service.recuperarListas().subscribe(
      // Caso o meu retorno RES seja do tipo Lista[]
    (res: Lista[]) => {
      this.listas = res;
    },
    (err) => {
      alert("Erro ao recuperar lista de compras!");
    })
  }
}
