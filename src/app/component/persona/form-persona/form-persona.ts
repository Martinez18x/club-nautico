import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ApiServiceTs } from '../../../service/api-service.ts';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-persona',
  imports: [FormsModule],
  templateUrl: './form-persona.html',
  styleUrl: './form-persona.css',
})
export class FormPersona implements OnInit { 
nombre:string=''; 
apellido:string=''; 
telefono:string=''; 
email:string=''; 

@Output() accionRealizada = new EventEmitter<any>();

bases:any; 
horas:any; 
constructor(private ApiService: ApiServiceTs){}; 
 
  ngOnInit(): void { 
    this.cargarBases(); 
  } 
 
  cargarBases(){ 
    this.ApiService.getBases().subscribe({ 
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
      'nombre':this.nombre, 
      'apellido':this.apellido, 
      'telefono':this.telefono,
      'email':this.email, 
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