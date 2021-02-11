import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

/* Se define el tipo, el cual contendrá un array. */

  messages: string[] = [];

/*
Método para agregar mensajes al array. Puede ser cualquier nombre.
.push: agrega un nuevo elemento al array.
*/
  add(message: string) {
    this.messages.push(message);
  }

/* Método para borrar los mensajes. Puede ser cualquier nombre. */
  clear() {
    this.messages = [];
  }

  constructor() { }
}
