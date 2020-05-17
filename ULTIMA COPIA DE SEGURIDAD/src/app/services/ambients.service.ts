import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Ambientes } from '../models/ambientes';
import { Observable } from 'rxjs';

const API_URL = 'https://app-sgh.herokuapp.com/api/gestec/ambients';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json' })
}


@Injectable({
  providedIn: 'root'
})
export class AmbientsService {

  constructor(private http: HttpClient) { }
  
  getAmbients() {
    return this.http.get<Ambientes[]>(API_URL);
  }

  getAllAmbients(): Observable<Ambientes[]> {
    return this.http.get<Ambientes[]>(API_URL);
  }


}
