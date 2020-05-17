import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http'
import { UserAuth } from '../models/user-auth';
import { User } from '../models/user';
import { tap, catchError } from 'rxjs/operators'
import { throwError } from 'rxjs';

const APi_URL = 'https://app-sgh.herokuapp.com/api/';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  securityObject: UserAuth = new UserAuth();

  constructor(private http: HttpClient) { }

  resetSecutityObject() {
    this.securityObject.token = '';
    this.securityObject.rol = [];
  }

  login(entity: User) {

    this.resetSecutityObject();

    return this.http.post(`${APi_URL}authenticate`, entity, httpOptions)
      .pipe(
        tap((resp: UserAuth) => {
          Object.assign(this.securityObject, resp);
          localStorage.setItem('token', this.securityObject.token);
        }),
        catchError(this.handleError)
      )
  }

  logout() {
    this.resetSecutityObject();
    localStorage.removeItem('token');
  }

  handleError(err: any) {
    return throwError(err.error);
  }

}
