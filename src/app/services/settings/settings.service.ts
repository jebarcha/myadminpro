import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  ajustes: Ajustes = {
    temaUrl: 'assets/css/colors/default.css',
    tema: 'default'
  };

  constructor( @Inject(DOCUMENT) private _document ) { 
    this.getAdjustements();
  }

  saveAdjustments() {
    localStorage.setItem('ajustes', JSON.stringify(this.ajustes));
  }

  getAdjustements() {
    if (localStorage.getItem('ajustes')) {
      this.ajustes = JSON.parse(localStorage.getItem('ajustes'));
    }
    this.ApplyTheme(this.ajustes.tema);
  }

  ApplyTheme(theme: string) {
    let url = `assets/css/colors/${theme}.css`;
    this._document.getElementById("myTheme").setAttribute('href', url);

    this.ajustes.tema = theme;
    this.ajustes.temaUrl = url;

    this.saveAdjustments();
  }
}

interface Ajustes {
  temaUrl: string;
  tema: string;
}