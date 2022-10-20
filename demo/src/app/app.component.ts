import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, from, interval, map, mergeMap, Observable, of } from 'rxjs';
import { Alumno } from './models/alumno';
import { AlumnoServiceService  } from './services/alumno.services.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  alumnos!: Alumno[];  
  alumnos$: Observable<Alumno[]>;
  alumnoMap$: Observable<Alumno[]>;
  promesa: any;

  constructor(
    private alumnoService: AlumnoServiceService
  ){
    this.alumnos$ = alumnoService.getAlumnosObservable();
    this.alumnoMap$ = alumnoService.obtenerAlumnoMap(13);
    alumnoService.obtenerAlumnosPromise().then((valor: Alumno[]) => {
      this.alumnos = valor;
    }).catch((error: any) => {
      console.error(error);
    });
  }
}