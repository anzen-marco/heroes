import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

/*
Se importa la interface y los datos fake de los héroes para poder trabajar.
*/
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

/*
getHeroes es un método que regresa la lista de héroes
Observable: Observa a petición del servidor, en este caso, que regrese la lista de héroes.
Hero: nombre de la interface
HEROES: listado de héroes
*/
  getHeroes(): Observable<Hero[]> {
//Manda el mensaje
    this.messageService.add('HeroService: fetched heroes');
    return of (HEROES);
  }

//console.console.log(getHeroes);
  
}
