import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero'; //Se importa la interface creada

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

/*
  Simepre que se quiera llamar la info, se necesita llamar la propieda hero, que contiene el tipo Hero ya incrustado.

  El @Input hace disponible la propiedad hero disponible para el enlace para el componente heroes (papá)
*/
  @Input() hero: Hero;

}
