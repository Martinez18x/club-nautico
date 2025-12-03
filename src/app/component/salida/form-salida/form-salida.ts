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
idbarco:string=''; 
idcapitan:string=''; 
fechasalida: string='';
horasalida: string='';
destino: string='';



@Output() accionRealizada = new EventEmitter<any>();
  
capitan: any;
bases:any; 
horas:any; 
constructor(private ApiService: ApiServiceTs){}; 
 
  ngOnInit(): void { 
    this.cargarBarcos(); 
    this.cargarCapitan();
  } 

  cargarCapitan(){ 
    this.ApiService.getCapitan().subscribe({ 
      next: (result) => { 
        console.log(result); 
        this.capitan=result; 
      }, 
      error: (err) => { 
        console.log(err); 
      } 
    }); 
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
      'idbarco':this.idbarco, 
      'idcapitan':this.idcapitan,
      'fechasalida':this.fechasalida,
      'horasalida':this.horasalida,
      'destino':this.destino,
       
    }; 
    this.ApiService.guardaSalida(datos).subscribe({ 
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