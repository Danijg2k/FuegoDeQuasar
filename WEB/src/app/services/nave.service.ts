import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FormGroup } from '@angular/forms';

@Injectable()
export class NaveService {
  constructor(private http: HttpClient) {}


  getAll<T>(): Observable<HttpResponse<T>> {
    return this.http.get<T>(environment.API_URL + 'registro', {
      observe: 'response',
    });
  }


}
