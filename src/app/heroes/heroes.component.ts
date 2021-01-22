import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'; //Se importa la interface creada

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  constructor() { }

/* La propiedad se define como tipo Hero, la cual perence a la interface Hero importada  y que se puede urlizar dentro del código*/
  hero: Hero = { //Se define la propiedad hero como de tipo Hero, importada de la interface.
    id: 1, //Dato que e sposible escribir dada la interfase.
    name: 'Windstorm',
    element: 'Wind' //No se puede agregar una propiedad si no esta definida en la interface.
  }

  ngOnInit(): void {
    

  }

}
