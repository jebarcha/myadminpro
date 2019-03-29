import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {
  subscription: Subscription;
    
  constructor() { 
    this.subscription = this.regresaObservable()
      // .pipe(
      //   retry(2)
      // )
      .pipe(
        map(result => {
          return result.valor;
        }),
        filter( (valor, index) => {
          // console.log('Filter', valor, index);
          if ( (valor % 2) === 1  ) {
            // impar
            return true;
          } else {
            return false;
          }
        })
      )
      .subscribe(
      numero => console.log('sub', numero),
      error => console.log('error en el obs', error),
      () => console.log('El observador termino')
      
    );

  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    console.log('la pagina se va a cerrar.');
  }
  
  regresaObservable():Observable<any> {
    return new Observable( (observer: Subscriber<any>) => {
      let contador = 0;
      let interval = setInterval( () => {
        contador ++;

        const salida = {
          valor: contador
        };

        observer.next(salida);

        if (contador === 3) {
          clearInterval(interval);
          observer.complete();
        }

        // if (contador === 2) {
        //   // clearInterval(interval);
        //   observer.error("Auxilio!");
        // }
  
      }, 1000);
    });
  }

}
