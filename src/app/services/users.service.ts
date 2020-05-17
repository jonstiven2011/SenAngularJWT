import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuarios } from '../models/usuarios';
import { Observable } from 'rxjs';

const API_URL = 'https://app-sgh.herokuapp.com/api/gestec/users';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json' })
}


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getAllUsuarios(): Observable<Usuarios[]> {
    return this.http.get<Usuarios[]>(API_URL);
  }


}
