import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ApiServiceTs } from '../../../service/api-service.ts';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-salida',
  imports: [FormsModule],
  templateUrl: './form-salida.html',
  styleUrl: './form-salida.css',
})
export class FormSalida implements OnInit { 
id_barco:string=''; 
id_capitan:string=''; 
fecha_salida: string='';
hora_salida: string='';
destino: string='';



@Output() accionRealizada = new EventEmitter<any>();

bases:any; 
horas:any; 
constructor(private ApiService: ApiServiceTs){}; 
 
  ngOnInit(): void { 
    this.cargarBarcos(); 
  } 
 
  cargarBarcos(){ 
    this.ApiService.getBarcos().subscribe({ 
      next: (result) => { 
        console.log(result); 
        this.bases=result; 
      }, 
      error: (err) => { 
        console.log(err); 
      } 
    }); 
  } 
 
  guardar(){ 
    let datos={ 
      'id_barco':this.id_barco, 
      'id_capitan':this.id_capitan,
      'fecha_salida':this.fecha_salida,
      'hora_salida':this.hora_salida,
      'destino':this.destino,
       
    }; 
    this.ApiService.guardarPersona(datos).subscribe({ 
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