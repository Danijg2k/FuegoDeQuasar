import { Satellites } from '../models/enviar/satellites.model';
import { FormGroup } from '@angular/forms';

import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Satellite } from '../models/enviar/satellite.model';
import axios from 'axios';

@Injectable()
export class SatelitesService {
  constructor(private http: HttpClient) {}


  // Enviar conjunto de satélites - post normal (Http)
  post<T>(body:FormGroup<any>): Observable<HttpResponse<T>> {
    let sat1 = new Satellite(body.controls['Nombre1'].value, body.controls['Distancia1'].value, (body.controls['Mensaje1'].value).trim().split(' '));
    let sat2 = new Satellite(body.controls['Nombre2'].value, body.controls['Distancia2'].value, (body.controls['Mensaje2'].value).trim().split(' '));
    let sat3 = new Satellite(body.controls['Nombre3'].value, body.controls['Distancia3'].value, (body.controls['Mensaje3'].value).trim().split(' '));
    let conjunto = new Satellites();
    // Conjunto
    conjunto.satellites = new Array(sat1,sat2,sat3);

    return this.http.post<T>(environment.API_URL + 'topsecret/', conjunto, {
      observe: 'response',
    });
  }


  // Enviar conjunto de satélites - post normal (Axios)
  postAxios(body:FormGroup<any>) {
    let sat1 = new Satellite(body.controls['Nombre1'].value, body.controls['Distancia1'].value, (body.controls['Mensaje1'].value).trim().split(' '));
    let sat2 = new Satellite(body.controls['Nombre2'].value, body.controls['Distancia2'].value, (body.controls['Mensaje2'].value).trim().split(' '));
    let sat3 = new Satellite(body.controls['Nombre3'].value, body.controls['Distancia3'].value, (body.controls['Mensaje3'].value).trim().split(' '));
    let conjunto = new Satellites();
    // Conjunto
    conjunto.satellites = new Array(sat1,sat2,sat3);

    return axios.post(environment.API_URL + 'topsecret/', conjunto).then(res => {
      return(res.data);
    }).catch((error) => {
      console.log(error)
    });
  }

}
