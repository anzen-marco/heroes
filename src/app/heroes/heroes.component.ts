import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'; //Se importa la interface creada
import { HEROES } from '../mock-heroes'; //Listado de héroes demos guardados en un array con los que se va a trabajar.
import { HeroService } from '../hero.service';//Se importa el servicio.
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

/*
private: indica que la variable solo funciona dentro de la clase.
heroService: es el nombre de la propiedad con la que s ellamará ene l código. pued ser cualquier nombre.
HerService: el nombre con el que se inyecta, se define en el import.
*/
  constructor(private heroService: HeroService, private messageService: MessageService) { }

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
  //heroes = HEROES;

 /*
Se define el tipo selectedHero basado en la interface Hero.

 onSelect: es el método que engloba la funcionalidad de seleccionar la propiedad de la interface. El nombre puede ser el que sea..
 void: como la función no regresanada, se utiliza void para delimitarlo.
 this: serefiere al alemento individual de la lista. Es como un querySelector de javascript.
 selectedHero: hace referencia al tipo SelectedHero declarado arriba,
 hero: hace referencia al tipo hero declarado arriba que contiene los datos que se van a mostrar.
 */

  selectedHero: Hero; 
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add('HeroesComponent: Héroe seleccionado id=${hero.id}');
  }

heroes: Hero[];
/*
Este método regresa la informaciónd e los héroes desde el servicio.

Asigna un array de héroes a la propiedas heroes.

getHeroes(): nombre del método.
this: hace referencia al mismo método

  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }
*/

/*
.subscribe: es un método de RxJS el cual pasa el array a la llamada.
*/
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    //console.log(HEROES);
    this.getHeroes(); //Se llama el método

    //console.log(getHeroes());
  }
}
