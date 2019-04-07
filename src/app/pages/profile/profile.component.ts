import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/service.index';
import swal from 'sweetalert';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: []
})
export class ProfileComponent implements OnInit {
  usuario: Usuario;
  imagenSubir: File;
  imagenTemp: string;
  
  constructor(public _usuarioService: UsuarioService) { 
    this.usuario = this._usuarioService.usuario;
  }

  ngOnInit() {
  }

  seleccionImagen( archivo: File ) {
    if (!archivo) {
      this.imagenSubir = null;
      return;
    }

    

    if (archivo.type.indexOf('image') < 0 ) {
      swal('Solo imagenes','El archivo seleccionado no es una imagen', 'error');
      // console.log('El archivo seleccionado no es una imagen', archivo);
      this.imagenSubir = null;
      this.imagenTemp = null;
      return;
    }

    this.imagenSubir = archivo;

     let reader = new FileReader();
     // let urlImagenTemp = reader.readAsDataURL( archivo );

     reader.onloadend = () => this.imagenTemp = reader.result;
  }

  cambiarImagen() {
    this._usuarioService.cambiarImagen(this.imagenSubir, this.usuario._id);
  }

  guardar(usuario: Usuario) {
    // console.log('usuario', usuario);
    this.usuario.nombre = usuario.nombre;
    if (!this.usuario.google) {
      this.usuario.email = usuario.email;
    }
    this._usuarioService.actualizarUsuario(this.usuario)
      .subscribe();
  }

}
