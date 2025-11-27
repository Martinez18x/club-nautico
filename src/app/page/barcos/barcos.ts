import { Component } from '@angular/core';
import { Menu } from '../../component/menu/menu';
import { FormBarcos } from '../../component/barcos/form-barcos/form-barcos';
import { ListBarcos } from '../../component/barcos/list-barcos/list-barcos';

@Component({
  selector: 'app-barcos',
  imports: [Menu, ListBarcos, FormBarcos],
  templateUrl: './barcos.html',
  styleUrl: './barcos.css',
})
export class Barcos {
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
