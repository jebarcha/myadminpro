import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor( public _adjustments: SettingsService) { }

  ngOnInit() {
    this.setCheck();
  }

  changeColor(theme: string, link: any) {
    this.applyCheck(link);
  
    this._adjustments.ApplyTheme(theme);
  }

  applyCheck(link: any) {
    let selectors: any = document.getElementsByClassName('selector');

    for (let ref of selectors) {
      ref.classList.remove('working');
    }

    link.classList.add('working');
  }

  setCheck() {
    let selectors: any = document.getElementsByClassName('selector');
    let theme = this._adjustments.ajustes.tema;

    for (let ref of selectors) {
      if ( ref.getAttribute('data-theme') === theme) {
        ref.classList.add('working');
        break;
      }
    }
  }

}
