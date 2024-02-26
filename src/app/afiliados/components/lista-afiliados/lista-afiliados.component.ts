import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AfiliadosService } from '../../services/afiliados.service';
import { Afiliado } from '../../interfaces/afiliado.interface';

@Component({
  selector: 'lista-afiliados',
  templateUrl: './lista-afiliados.component.html',
  styleUrls: ['./lista-afiliados.component.css'],
})
export class ListaAfiliadosComponent implements OnInit {
  afiliados: Afiliado[] = [];

  @Output() editar = new EventEmitter<Afiliado>();

  constructor(private afiliadosService: AfiliadosService) {}

  ngOnInit() {
    this.listarAfilados();

    this.actualizarListaAfiliados()
  }

  listarAfilados() {
    this.afiliadosService.listarAfiliados().subscribe((res) => {
      this.afiliados = res;
    });
  }

  actualizarListaAfiliados(){
    this.afiliadosService.afiliados$.subscribe((afiliados) => {
      this.afiliados = afiliados;
    });
  }

  actualizarAfiliado(afiliado: Afiliado) {
    this.editar.emit(afiliado);
  }

  eliminarAfiliado(id: number) {

    let mensaje:string = '¿Esta seguro de eliminar?'

    if (confirm(mensaje) !== true)  return;

    this.afiliadosService.eliminarAfiliado(id).subscribe((res) => {
      this.listarAfilados();
    });
  }
}
