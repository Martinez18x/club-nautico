import { Routes } from '@angular/router';
import { Persona } from './page/persona/persona';
import { Inicio } from './page/inicio/inicio';
import { Barcos } from './page/barcos/barcos';
import { Salida } from './page/salida/salida';

export const routes: Routes = [
{ path: '', component: Inicio }, 
{ path: 'persona', component: Persona },
{ path: 'barcos', component: Barcos },
{ path: 'salida', component: Salida },
];
