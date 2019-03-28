import { Component, OnInit } from '@angular/core';

declare function init_plugins(); // asi se llama cualquier script fuera de angular

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: []
})
export class PagesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    init_plugins();
  }

}
