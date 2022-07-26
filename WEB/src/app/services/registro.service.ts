import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import axios from 'axios';

@Injectable()
export class RegistroService {
  constructor(private http: HttpClient) {}


  // Obtener todos los registros
  getAll(): Observable<any> {
    return this.http.get(environment.API_URL + 'registro');
  }


  // getAllAxios(): Observ  {
  //   return axios.get(environment.API_URL + 'registro').then(res => {
  //     console.log(res);
  //     return res.data;
  //   }).catch((error) => {
  //     console.log(error)
  //   });
  // }
}
