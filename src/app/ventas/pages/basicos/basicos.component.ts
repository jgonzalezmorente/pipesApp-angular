import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = 'feranando';
  nombreUpper: string = 'FERNANDO';
  nombreCompleto: string = 'feraNanDo herRera';

  fecha: Date = new Date();


}
