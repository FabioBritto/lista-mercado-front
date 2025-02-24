//Imports do Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';

//Imports meus
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListasComponent } from './componentes/listas/listas.component';
import { DetalhelistaComponent } from './componentes/detalhelista/detalhelista.component';


//Os DECLARATIONS são os componentes criados por mim
@NgModule({
  declarations: [
    AppComponent,
    ListasComponent,
    DetalhelistaComponent
  ],
  //Os IMPORTS são os componentes que eu usarei do ANGULAR
  imports: [ 
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, //Preciso do componente de Requisições HTTP
    FormsModule // Preciso do componente de manipulação de Formulários
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
