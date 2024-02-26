import { Component } from '@angular/core';
import { Afiliado } from '../../interfaces/afiliado.interface';

@Component({
  selector: 'afiliado-home-pages',
  templateUrl: './home-pages.component.html',
  styleUrls: ['./home-pages.component.css']
})
export class HomePagesComponent {

  afiliadoEditar!: Afiliado;

}
