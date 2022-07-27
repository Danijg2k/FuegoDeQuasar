import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FormGroup } from '@angular/forms';
import { Satellite } from '../models/enviar/satellite.model';
import axios from 'axios';

@Injectable()
export class SateliteService {
  constructor(private http: HttpClient) {}


  // Enviar satélites de uno en uno - post split (Http)
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



  // Enviar satélites de uno en uno - post split (Axios)
  postSplitAxios(body:FormGroup<any>) {
    let bodyData = new Satellite();
    bodyData.name = body.controls['Nombre1'].value;
    bodyData.distance = body.controls['Distancia1'].value;
    // Split message into array
    bodyData.message = body.controls['Mensaje1'].value.split(' ');

    return axios.post(environment.API_URL + 'topsecret_split/' + bodyData.name, bodyData).then(res => {
      return(res.data);
    }).catch((error) => {
      console.log(error)
    });
  }


}


