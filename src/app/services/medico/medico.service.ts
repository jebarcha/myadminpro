import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';
import { map } from 'rxjs/operators';
import { UsuarioService } from '../usuario/usuario.service';
import { Medico } from 'src/app/models/medico.model';
// import * as swal from 'sweetalert';
declare var swal: any;

@Injectable({
  providedIn: 'root'
})
// @Injectable()
export class MedicoService {
  totalMedicos: number = 0;

  constructor(public http: HttpClient,  public _usuarioService: UsuarioService) { }

  cargarMedicos(desde: number) {
    let url = URL_SERVICIOS + '/medico?desde=' + desde;

    return this.http.get(url).pipe(
      map( (resp: any) => {
        this.totalMedicos = resp.total;
        return resp.medicos;
      })
    );
  }

  buscarMedicos( termino: string) {
    let url = URL_SERVICIOS + '/busqueda/coleccion/medico/' + termino;
    console.log('buscarMedicos url', url);
    return this.http.get(url).pipe(
       map( (resp: any) => {
          return resp.medico;
       })
    );
 }

 borrarMedico(id) {
  let url = URL_SERVICIOS + '/medico/' + id;
  const token = this._usuarioService.getToken()
  url += '?token=' + token;
  return this.http.delete(url).pipe(
     map( resp => {
        swal('Medico borrado', 'El medico ha sido eliminado correctamente', 'success');
        return true;
     })
  );
}


guardarMedico( medico: Medico ) {
  let url = URL_SERVICIOS + '/medico';
  const token = this._usuarioService.getToken();

  if ( medico._id ) {
    // actualizando
    url += '/' + medico._id;
    url += '?token=' + token;
    return this.http.put( url, medico).pipe(
      map( (resp: any) => {
        swal('Medico actualizado', medico.nombre, 'success');
        return resp.medico;
      })
    )
  } else {
    // creando
    url += '?token=' + token;
    return this.http.post(url, medico ).pipe(
         map( (resp: any) => {
            swal('Medico creado', medico.nombre, 'success');
            return resp.medico;
         })
      );
  }
}

cargarMedico(id: string) {
  let url = URL_SERVICIOS + '/medico/' + id;

  return this.http.get(url).pipe(
    map ( (resp: any) => resp.medico )
  );
}


}
