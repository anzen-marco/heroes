import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
/* Propiedad utilizada para el título de la página */
  title = 'Tour  of heroes';

/* Se peuden definir las propiedades a voluntad e imprimirlas en el HTML */
  hola = '¡Hola soy una propiedad!';
}
