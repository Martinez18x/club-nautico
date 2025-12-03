import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ApiServiceTs } from '../../../service/api-service.ts';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-barcos',
  imports: [FormsModule],
  templateUrl: './form-barcos.html',
  styleUrl: './form-barcos.css',
})
export class FormBarcos implements OnInit {
  matricula: string = '';
  nombre: string = '';
  numeroamarre: number=0;
  cuota: number= 0;
  idsocio:any;
  

  @Output() accionRealizada = new EventEmitter<any>();
  bases: any;
  constructor(private ApiService: ApiServiceTs) { };

  ngOnInit(): void {
    this.cargarPersonas();
  }

  cargarPersonas() {
    this.ApiService.getPersonas().subscribe({
      next: (result) => {
        console.log(result);
        this.bases = result;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  guardar() {
    let datos = {
      'matricula': this.matricula,
      'nombre': this.nombre,
      'numeroamarre': this.numeroamarre,
      'cuota': this.cuota,
      'idsocio': this.idsocio,
    };
    this.ApiService.guardarBarcos(datos).subscribe({
      next: (result) => {
        console.log(result);
        this.accionRealizada.emit(1);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

} 