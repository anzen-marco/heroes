import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'; //Se importa la interface creada
import { HEROES } from '../mock-heroes'; //Listado de héroes demos guardados en un array con los que se va a trabajar.

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  constructor() { }

/*
El tipo se define Hero, la cual perence a la interface Hero importada  y que se puede urlizar dentro del código

Se deben utilizar todas los tipos marcados en hero.ts, de lo contrario se marcará un error.
*/
  hero: Hero = { //Se define el tipo hero como base la interfase Hero.
    id: 10000, //Dato que e sposible escribir dada la interfase.
    name: 'Windstorm',
    element: 'Wind' //No se puede agregar una propiedad si no esta definida en la interface.
  }

/*
Se define una nueva propiedad para poder mostrar la lista demo de Héroes
heroes: nombre de la propiedad.
HEROES: Array creado en mock-heroes.ts el cual trae la lista de héroes.
*/
  heroes = HEROES;

 /*
Se define el tipo selectedHero basado en la interface Hero.

 onSelect: es un método de Angular que se refiere al elemento cuando se selecciona.
 void: como la función no regresanada, se utiliza void para delimitarlo.
 this: serefiere al alemento individual de la lista. Es como un querySelector de javascript.
 selectedHero: hace referencia al tipo SelectedHero declarado arriba,
 hero: hace referencia al tipo hero declarado arriba que contiene los datos que se van a mostrar.
 */

  selectedHero: Hero; 
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  ngOnInit(): void {
    console.log(HEROES);
  }
}
