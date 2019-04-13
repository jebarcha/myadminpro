import { Component, OnInit } from '@angular/core';
import { ModalUploadService } from 'src/app/components/modal-upload/modal-upload.service';
// import { ModalUploadService } from '../../components/modal-upload/modal-upload.service';
import { Medico } from 'src/app/models/medico.model';
import { MedicoService } from 'src/app/services/service.index';
// import swal from 'sweetalert';
declare var swal: any;

@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.component.html',
  styles: []
})
export class MedicosComponent implements OnInit {
  medicos: Medico[] = [];
  cargando = true;
  desde = 0;

  constructor(public _medicoService: MedicoService,
              public _modalUploadService: ModalUploadService) { }

  ngOnInit() {
    this.cargarMedicos();

    this._modalUploadService.notificacion.subscribe(resp => this.cargarMedicos() );

  }

  cargarMedicos() {
    this.cargando = true;
    this._medicoService.cargarMedicos(this.desde)
      .subscribe( medicos => {
        this.medicos = medicos;
        this.cargando = false;
        // console.log('resp', resp);
      });

  }

  // mostrarModal( id: string) {
  //   this._modalUploadService.mostarModal( 'medicos', id);
  // }


  buscarMedico( termino: string) {

    if (termino.length <= 0 ) {
      this.cargarMedicos();
      return;
    }

    this.cargando = true;

    this._medicoService.buscarMedicos(termino)
      .subscribe( (medicos: Medico[]) => {
        this.medicos = medicos;
        this.cargando = false;
      });

  }

  borrarMedico(medico: Medico) {
    swal({
      title: 'Are you sure?',
      text: 'You are about to delete doctor ' + medico.nombre,
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    })
    .then((borrar) => {
      if (borrar) {
        this._medicoService.borrarMedico( medico._id )
          .subscribe( (borrado: boolean) => {
            this.cargarMedicos();
          });
  
      }

    });
 }

 cambiarDesde( valor: number ) {
  let desde = this.desde + valor;

  if ( desde >= this._medicoService.totalMedicos) {
    return;
  }
  if ( desde < 0 ) {
    return;
  }
  // console.log('cambiarDesde', desde, valor)
  this.desde += valor;
  this.cargarMedicos();

}


}
