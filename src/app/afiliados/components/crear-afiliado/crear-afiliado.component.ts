import { Component, Input, OnInit } from '@angular/core';
import { AfiliadosService } from '../../services/afiliados.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Afiliado } from '../../interfaces/afiliado.interface';

@Component({
  selector: 'afiliado-crear-afiliado',
  templateUrl: './crear-afiliado.component.html',
  styleUrls: ['./crear-afiliado.component.css'],
})
export class CrearAfiliadoComponent implements OnInit {
  @Input() afiliado: Afiliado | undefined;

  //formAfiliado: FormGroup;
  formAfiliado: FormGroup = new FormGroup({});

  nombreBotonSubmit = 'Crear';
  editar = false;
  id: number = 0;

  constructor(private afiliadosService: AfiliadosService) {}


  ngOnInit(): void {
    this.inicializarFormulario();//Iniciamos el formulario en caso de ser edición o creación
  }

  ngOnChanges(): void {
    this.cargarDatosFormularioEditar() // cargamos los datos de la lista al formulario
  }

  cargarDatosFormularioEditar(){
    if (this.afiliado) {
      this.nombreBotonSubmit = 'Actualizar';
      this.id = this.afiliado.id!;
      this.editar = true;
      this.formAfiliado.patchValue(this.afiliado);
    }
  }

  inicializarFormulario(): void {
    this.formAfiliado = new FormGroup({
      nombres: new FormControl(''),
      apellidos: new FormControl(''),
      fechaNacimiento: new FormControl(''),
      direccion: new FormControl(''),
      telefono: new FormControl(''),
      genero: new FormControl(''),
    });
  }

  saveAfiliado() { //guardar afiliado en caso de creacion o edicion
    if (this.editar) {
      this.updateAfiliado(this.id, this.formAfiliado.value);//guardar edicion
      return;
    }
    //guardar creacion
    this.createAfiliado()

  }

  //actualizar afiliado
  updateAfiliado(id: number, formAfiliado: FormGroup) {
    this.afiliadosService
      .actualizarAfiliados(id, formAfiliado)
      .subscribe((res) => {
        this.editar = true;
        this.formAfiliado.reset();
        this.nombreBotonSubmit = 'Crear';
        this.afiliadosService.actualizarListaAfiliados();
      });
  }

  //crear afiliado
  createAfiliado(){

    this.afiliadosService
      .crearAfiliado(this.formAfiliado.value)
      .subscribe((res) => {
        if (res) {
          this.formAfiliado.reset();
          this.afiliadosService.actualizarListaAfiliados();
        }
      });

  }
}
