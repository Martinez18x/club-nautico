import { Component, OnInit } from '@angular/core';
import { ApiServiceTs } from '../../../service/api-service.ts';

@Component({
  selector: 'app-lista-persona',
  imports: [],
  templateUrl: './lista-persona.html',
  styleUrl: './lista-persona.css',
})
export class ListaPersona implements OnInit {
  data: any;
  constructor(private ApiService: ApiServiceTs
  ) { };
  ngOnInit(): void {
    this.cargar();
  }
  cargar() {
    this.ApiService.getPersonas().subscribe({
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