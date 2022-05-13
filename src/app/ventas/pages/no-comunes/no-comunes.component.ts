import { Component } from '@angular/core';
import { interval } from 'rxjs';
import { tap } from 'rxjs/operators';


@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  // i18nSelect
  nombre: string = 'Fernando';
  genero: string = 'masculino';
  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  // i18nPlural
  clientes: string[] = [ 'María', 'Pedro', 'Hernando', 'Eduardo', 'Fernando' ];  
  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando'
  }

  cambiarCliente() {
    if ( this.nombre == 'Fernando'  ) {
      this.nombre = 'Melissa';
      this.genero = 'femenino';
    } else {
      this.nombre = 'Fernando';
      this.genero = 'masculino';
    }
  }

  borrarCliente() {
    this.clientes.pop();
  }

  // KeyValue Pipe

  persona = {
    nombre: 'Fernando',
    endad: 35,
    direccion: 'Ottawa, Canadá'
  }

  // JsonPipe
  
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    },

  ]


  // Async Pipe
  miObservable = interval( 2000 );

  valorPromesa = new Promise( ( resolve, reject ) => {

    setTimeout(() => {
      resolve( 'Tenemos data de promesa' );
    }, 3500);

  });

}
