/*
DEFINIR LA INTERFACE
Se crea el tipo de clase que se utilizará apra definir los heroes.
Se crean lso tipos que utilizarán la información:
id: string
name: string
element: string

Es importante notar que se deben utilizar todos los tipos en la informaci{on, de lo contrario, se mostrar{a un error.}}
*/

export interface Hero {
    id: number; //ID del héroe tipo number
    name:  string; //Nombre del héroe de tipo string
    element: string;
}