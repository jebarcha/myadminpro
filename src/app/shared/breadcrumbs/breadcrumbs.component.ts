import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map, tap } from 'rxjs/operators';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnInit {
  pageTitle: string;
   
  constructor(private router: Router, private title: Title,
          private meta: Meta) {
   
    this.getDataRoute().subscribe( data => {
      // console.log('data', data);
      this.pageTitle = data.pageTitle;
      this.title.setTitle( this.pageTitle ); // to set the title in the tab in the chrome navigator
      
      const metaTag: MetaDefinition = {
        name: "description",
        content: this.pageTitle
      };

      this.meta.updateTag(metaTag);
   
    } );

  }

  ngOnInit() {
  }

  getDataRoute() {
    return this.router.events
    .pipe(
      // tap((evento1) => console.log('evento1', evento1)),
      filter( evento => evento instanceof ActivationEnd),
      // tap((evento2) => console.log('evento2', evento2)),
      filter( (evento: ActivationEnd) => evento.snapshot.firstChild === null ),
      map( (evento: ActivationEnd) => evento.snapshot.data )
    );
  }

}
