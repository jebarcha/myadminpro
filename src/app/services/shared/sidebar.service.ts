import { Injectable } from '@angular/core';
import { UsuarioService } from '../usuario/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any = [];

  // menu: any = [
  //   { title: 'Main',
  //     icon: 'mdi mdi-gauge',
  //     submenu: [
  //       { title: 'Dashboard', url: '/dashboard' },
  //       { title: 'ProgressBar', url: '/progress' },
  //       { title: 'Graphics', url: '/graficas1' },
  //       { title: 'Promesas', url: '/promesas'},
  //       { title: 'RxJs', url: '/rxjs' }
  //     ]
  //   },
  //   {
  //     title: 'Maintenance',
  //     icon: 'mdi md-folder-lock-open',
  //     submenu: [
  //       { title: 'Usuarios', url: '/usuarios'},
  //       { title: 'Hospitales', url: '/hospitales'},
  //       { title: 'Medicos', url: '/medicos'}
  //     ]
  //   }
  // ];

  constructor( public _usuarioService: UsuarioService) { 
    
  }

  cargarMenu() {
    this.menu = this._usuarioService.menu;
  }
}
