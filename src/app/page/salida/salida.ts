import { Component } from '@angular/core';
import { Menu } from '../../component/menu/menu';
import { ListaSalida } from '../../component/salida/lista-salida/lista-salida';
import { FormSalida } from '../../component/salida/form-salida/form-salida';

@Component({
  selector: 'app-salida',
  imports: [Menu, ListaSalida, FormSalida],
  templateUrl: './salida.html',
  styleUrl: './salida.css',
})
export class Salida {
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



