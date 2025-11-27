import { Component } from '@angular/core';
import { Menu } from '../../component/menu/menu';
import { ListaPersona } from '../../component/persona/lista-persona/lista-persona';
import { FormPersona } from '../../component/persona/form-persona/form-persona';

@Component({
  selector: 'app-persona',
  imports: [Menu, ListaPersona, FormPersona],
  templateUrl: './persona.html',
  styleUrl: './persona.css',
})
export class Persona {

  lista: Boolean = true;

  mostrar() {
    if (this.lista) {
      this.lista = false;
    } else {
      this.lista = true;
    }
  }

  recargar() {
    this.mostrar();
  }
}

