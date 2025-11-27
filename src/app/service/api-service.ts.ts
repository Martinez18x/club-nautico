import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiServiceTs {

  private apiUrl = "http://localhost/backend/public/club/";

  constructor(private http: HttpClient) { }

  getPersonas(): Observable<any> {
    return this.http.get(this.apiUrl + "lista").pipe(res => res);
  }


  getBases(): Observable<any> {
    return this.http.get(this.apiUrl + "bases").pipe(res => res);
  }


  guardarPersona(datos: any): Observable<any> {
    return this.http.post(this.apiUrl + "/nuevo_socio", datos).pipe(res => res);
  }

  getBarcos(): Observable<any> {
    return this.http.get(this.apiUrl + "barcos").pipe(res => res);
  }

guardarBarcos(datos: any): Observable<any>{
return this.http.post(this.apiUrl + "/nuevo_barco",datos).pipe(res=>res);
};


getSalida(): Observable<any> {
    return this.http.get(this.apiUrl + "salidas").pipe(res => res);
  }



}

