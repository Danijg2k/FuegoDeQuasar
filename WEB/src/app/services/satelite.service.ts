import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FormGroup } from '@angular/forms';
import { Satellite } from '../models/enviar/satellite.model';

@Injectable()
export class SateliteService {
  constructor(private http: HttpClient) {}

  postSplit<T>(body:FormGroup<any>): Observable<HttpResponse<T>> {
    let bodyData = new Satellite();
    bodyData.name = body.controls['Nombre1'].value;
    bodyData.distance = body.controls['Distancia1'].value;
    // Split message into array
    bodyData.message = body.controls['Mensaje1'].value.split(' ');

    return this.http.post<T>(environment.API_URL + 'topsecret_split/' + bodyData.name, bodyData, {
      observe: 'response',
    });
  }
}
