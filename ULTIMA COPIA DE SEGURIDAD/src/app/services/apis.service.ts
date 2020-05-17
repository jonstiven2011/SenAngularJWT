import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/ambientes';

@Injectable({
  providedIn: 'root'
})
export class ApisService {
  baseURL = environment.apiURLJSON + 'users/';
  baseURLSena = environment.apiURL;

  constructor( private http: HttpClient) { }

  //Consumo de api trayendo un solo dato de JSOPLACEHOLDER
  getUser(userId: string): Observable<User>{
    const url = this.baseURL + userId;
    return this.http.get<User>(url);
  }

  //Consumo de api trayendo todos los datos JSOPLACEHOLDER
  getUsersWithHeaders(): Observable<any> {
    return this.http.get(this.baseURL, {observe: 'response'});
  }

  //Consumo de api trayendo todos los datos JSOPLACEHOLDER
  getUsersSena(): Observable<any> {
    return this.http.get(this.baseURLSena, {observe: 'response'});
  }

  
}
