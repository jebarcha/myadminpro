import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { URL_SERVICIOS } from '../../config/config';

import { Hospital } from 'src/app/models/hospital.model';
import { UsuarioService } from '../usuario/usuario.service';

//import swal from 'sweetalert';
declare var swal: any;

@Injectable({
  providedIn: 'root'
})
export class HospitalService {

  token: string;
  totalHospitales: number = 0;

  constructor(public http: HttpClient, public _usuarioService: UsuarioService) { }

  cargarHospitales() {
    // No hace falta que reciba parámetros, pero retorna un observable con todos los hospitales.
    let url = URL_SERVICIOS + '/hospital';

    return this.http.get(url).pipe(
      map( (resp: any) => {
        this.totalHospitales = resp.total;
        return resp.hospitales;
      })
    );
  }

  obtenerHospital( id: string ) {
    // Esta función recibe un ID de un hospital y retorna toda la información del mismo.
    let url = URL_SERVICIOS + '/hospital/' + id;

    return this.http.get(url).pipe(
      map ((resp: any) => resp.hospital)
    );

  }

  borrarHospital( id: string ) {
    // : Recibe un ID de un hospital y lo borra
    let url = URL_SERVICIOS + '/hospital/' + id;
    const token = this._usuarioService.getToken()
    url += '?token=' + token;
    return this.http.delete(url).pipe(
       map( resp => {
          swal('Hospital borrado', 'El hospital ha sido eliminado correctamente', 'success');
          return true;
       })
    );
  }

  crearHospital( nombre: string ) {
    // : Recibe el nombre del hospital y lo crea.
    let url = URL_SERVICIOS + '/hospital';
    const token = this._usuarioService.getToken();
    url += '?token=' + token;
    return this.http.post(url, { nombre: nombre } ).pipe(
         map( (resp: any) => {
            swal('Hospital creado', nombre, 'success');
            return resp.usuario;
         })
      );
  }

  buscarHospital( termino: string ) {
    // : Recibe el término de búsqueda y retorna todos los
    // hospitales que coincidan con ese término de búsqueda.
    let url = URL_SERVICIOS + '/busqueda/coleccion/hospital/' + termino;
    return this.http.get(url).pipe(
       map( (resp: any) => {
          return resp.hospitales;
       })
    );
  }

  actualizarHospital( hospital: Hospital ) {
    // : Recibe un hospital y lo actualiza.
    let url = URL_SERVICIOS + '/hospital/' + hospital._id;
    url += '?token=' + this._usuarioService.getToken();

    // console.log('url', url);
    return this.http.put(url, hospital).pipe(
       map( (resp: any) => {
          // if (hospital._id === this.hospital._id) {
          //    let hospitalDB: Hospital = resp.hospital;
          // }

          swal('Hospital actualizado', hospital.nombre, 'success');
          return true;
       } )
    );
  }
}
