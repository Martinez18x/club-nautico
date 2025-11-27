import { Component, OnInit } from '@angular/core';
import { ApiServiceTs } from '../../../service/api-service.ts';

@Component({
  selector: 'app-list-barcos',
  imports: [],
  templateUrl: './list-barcos.html',
  styleUrl: './list-barcos.css',
})
export class ListBarcos implements OnInit {
  data: any;
  constructor(private ApiService: ApiServiceTs
  ) { };
  ngOnInit(): void {
    this.cargar();
  }
  cargar() {
    this.ApiService.getBarcos().subscribe({
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


