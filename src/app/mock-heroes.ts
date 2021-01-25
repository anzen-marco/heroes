/* Esta es una lista dummy de H{eroes para poder trabajar. */
import { Hero } from './hero'; //Se import ala interface hero.ts, pues en ella est{an definidas las propiedades con las que se va a trabajar.

/*
export: esporta la variable a otros compoentnes para que se pueda usar.
HEROES: nombre de la varialbe.
Hero: hace referencia a la interfase.
[]: denota que se trata de un arreglo
*/
export const HEROES: Hero[] = [
/* Los datos que se llenan van en funci{ona  la interface que se creó */
    { id: 11, name: 'Dr. Nice', element: 'Mind' },
    { id: 12, name: 'Narco', element: 'Blood' },
    { id: 13, name: 'Bombasto', element: 'Fire' },
    { id: 14, name: 'Celeritas', element: 'Speed' },
    { id: 15, name: 'Magneta', element: 'Magnet'},
    { id: 16, name: 'RubberMan', element: 'Plastic' },
    { id: 17, name: 'Dynama', element: 'Nuclear' },
    { id: 18, name: 'Dr IQ', element: 'Mind'},
    { id: 19, name: 'Magma', element:'Fire' },
    { id: 20, name: 'Tornado', element: 'Wind' }
];


