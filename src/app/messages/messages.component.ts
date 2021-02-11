import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  titulo = 'Mensajes'

/*  
Los servicios deben ponerse en el constructor para que se rendericen cuando se crear el componente 
Si es públic, se puede agrear en un template.
Si es private, no puede salir de aquí.
*/
  constructor(public messageService: MessageService) { }

  ngOnInit(): void {
  }

}
