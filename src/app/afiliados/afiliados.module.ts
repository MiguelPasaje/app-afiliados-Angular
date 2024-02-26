import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePagesComponent } from './pages/home-pages/home-pages.component';
import { ListaAfiliadosComponent } from './components/lista-afiliados/lista-afiliados.component';
import { CrearAfiliadoComponent } from './components/crear-afiliado/crear-afiliado.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomePagesComponent,
    ListaAfiliadosComponent,
    CrearAfiliadoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[
    HomePagesComponent,
  ]
})
export class AfiliadosModule { }
