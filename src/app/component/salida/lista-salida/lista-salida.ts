import { Component, OnInit } from '@angular/core';
import { ApiServiceTs } from '../../../service/api-service.ts';

@Component({
  selector: 'app-lista-salida',
  imports: [],
  templateUrl: './lista-salida.html',
  styleUrl: './lista-salida.css',
})
export class ListaSalida implements OnInit {
  data: any;
  constructor(private ApiService: ApiServiceTs
  ) { };
  ngOnInit(): void {
    this.cargar();
  }
  cargar() {
    this.ApiService.getSalida().subscribe({
      next: (result) => {
        console.log(result);
        this.data = result;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}