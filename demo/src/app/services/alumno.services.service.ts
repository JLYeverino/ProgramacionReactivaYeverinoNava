import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, map, Observable, Subject } from 'rxjs';
import {Alumno} from '../models/alumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnoServiceService {
  alumnos: Alumno[] = [{
    matricula: 11,
    nombre: 'Jose',
    apePaterno: 'Yeverino',
    edad: 22,
    promedio: 9
  },{
    matricula: 12,
    nombre: 'Angel',
    apePaterno: 'Saucedo',
    edad: 25,
    promedio: 10
  },{
    matricula: 13,
    nombre: 'Marcos',
    apePaterno: 'Medina',
    edad: 21,
    promedio: 7
  },{
    matricula: 14,
    nombre: 'Leo',
    apePaterno: 'Paredes',
    edad: 19,
    promedio: 6
  },{
    matricula: 15,
    nombre: 'Paulo',
    apePaterno: 'Dybala',
    edad: 18,
    promedio: 7
  }];
  alumnos$!: Observable<Alumno[]>;
  constructor() { 
    this.alumnos$ = new Observable<Alumno[]>((suscriptor) => {
      suscriptor.next(this.alumnos);
    })
  }
  getAlumnosObservable(){
    return this.alumnos$;
  }
  obtenerAlumnoMap(matricula: number): Observable<Alumno[]>{
    return this.getAlumnosObservable().pipe(
      map((cursos: Alumno[]) => this.alumnos.filter((alumno: Alumno) => alumno.matricula === matricula))
    )
  }
  obtenerAlumnosPromise(): Promise<Alumno[] | any>{
    return new Promise((resolve, reject) => {
      if(this.alumnos.length > 0){
        resolve(this.alumnos);
      }else{
        reject({
          codigo: 0,
          mensaje: 'No hay alumnos registrados.'
        });
      }
    });
  }
}