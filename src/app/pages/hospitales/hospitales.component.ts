import { Component, OnInit } from '@angular/core';
// import { UsuarioService } from '../../services/service.index';
// import swal from 'sweetalert';
import { ModalUploadService } from '../../components/modal-upload/modal-upload.service';
import { Hospital } from 'src/app/models/hospital.model';
import { HospitalService } from 'src/app/services/service.index';

declare var swal: any;

@Component({
  selector: 'app-hospitales',
  templateUrl: './hospitales.component.html',
  styles: []
})
export class HospitalesComponent implements OnInit {

  hospitales: Hospital[] = [];
  cargando = true;

  constructor(public _hospitalService: HospitalService,
              public _modalUploadService: ModalUploadService) { }

  ngOnInit() {
    this.cargarHospitales();

    this._modalUploadService.notificacion.subscribe(resp => this.cargarHospitales() );
  }

  mostrarModal( id: string) {
    this._modalUploadService.mostarModal( 'hospitales', id);
  }

  cargarHospitales() {
    this.cargando = true;
    this._hospitalService.cargarHospitales()
      .subscribe( hospitales => {
        this.hospitales = hospitales;
        this.cargando = false;
        // console.log('resp', resp);
      });

  }

  buscarHospital( termino: string) {

    if (termino.length <= 0 ) {
      this.cargarHospitales();
      return;
    }

    this.cargando = true;

    // console.log( termino );
    this._hospitalService.buscarHospital(termino)
      .subscribe( (hospitales: Hospital[]) => {
        this.hospitales = hospitales;
        this.cargando = false;
      });

  }

  borrarHospital(hospital: Hospital) {
    // console.log('hospital a borrar', hospital);
    // if (hospital._id === this._hospitalService.hospital._id) {
    //   swal('No puede borrar hospital', 'No se puede borrar a si mismo', 'error');
    //   return;
    // }

    swal({
      title: 'Are you sure?',
      text: 'You are about to delete hospital ' + hospital.nombre,
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    })
    .then((borrar) => {
      // console.log(borrar);
      if (borrar) {
        this._hospitalService.borrarHospital( hospital._id )
          .subscribe( (borrado: boolean) => {
            // console.log(borrado);
            this.cargarHospitales();
          });
      }
    });
 }

 guardarHospital(hospital: Hospital) {
    // console.log('usuario', usuario);
    this._hospitalService.actualizarHospital(hospital)
      .subscribe();
 }

 crearHospital() {
  swal({
    title: 'Create New Hospital',
    text: 'Input Hospital Name',
    content: 'input',
    icon: 'info',
    buttons: true,
    dangerMode: true
  }).then( valor => {
    if ( !valor || valor.length === 0) {
      return;
    }

    this._hospitalService.crearHospital( valor )
      .subscribe( () => this.cargarHospitales());
  })
}


}
