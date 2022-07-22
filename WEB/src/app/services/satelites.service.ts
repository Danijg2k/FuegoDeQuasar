import { Satelites } from './../models/satelites.model';
import { FormGroup } from '@angular/forms';
import { Satelite } from './../models/satelite.model';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class SatelitesService {
  constructor(private http: HttpClient) {}

  post<T>(body:FormGroup<any>): Observable<HttpResponse<T>> {
    let sat1 = new Satelite();
    let sat2 = new Satelite();
    let sat3 = new Satelite();
    let conjunto = new Satelites();
    // Sat 1
    sat1.name = body.controls['Nombre1'].value;
    sat1.distance = body.controls['Distancia1'].value;
    sat1.message = body.controls['Mensaje1'].value.split(' ');
    // Sat 2
    sat2.name = body.controls['Nombre2'].value;
    sat2.distance = body.controls['Distancia2'].value;
    sat2.message = body.controls['Mensaje2'].value.split(' ');
    // Sat 3
    sat3.name = body.controls['Nombre3'].value;
    sat3.distance = body.controls['Distancia3'].value;
    sat3.message = body.controls['Mensaje3'].value.split(' ');
    // Conjunto
    conjunto.satellites = new Array(sat1,sat2,sat3);

    return this.http.post<T>(environment.API_URL + 'topsecret/', conjunto, {
      observe: 'response',
    });
  }
}
