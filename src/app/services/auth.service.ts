import { Injectable } from '@angular/core';
import {  Observable} from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { User } from '../core/models/user'
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _user  : User;
  private _token : string;
  public httpHeaders = new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded',
    'Authorization': 'Basic ' + environment.APP_CREDENTIALS
  })

  
  constructor(private http: HttpClient ) { }


  login(user : User ): Observable<any>{  

    let params = `grant_type=${ environment.APP_CONSSECION }&username=${ user.username }&password=${ user.password }`
 
    return this.http.post<any>(environment.API_URL_OAUTH, params , { headers: this.httpHeaders })
  }

  saveUser(accessToken: string): void {
    let payload = this.getDataToken(accessToken);
    this._user = new User;
    this._user.nombre = payload.nombre;
    this._user.apellido = payload.apellido;
    this._user.email = payload.email;
    this._user.username = payload.user_name;
    this._user.roles = payload.authorities;
    sessionStorage.setItem('usuario', JSON.stringify(this._user));
  }

  saveToken(accessToken: string) : void {
    this._token = accessToken;
    sessionStorage.setItem('token', accessToken);
  }

  getDataToken(accessToken: string) : any {
    if (accessToken != null) {
      return JSON.parse(atob(accessToken.split(".")[1]));
    }

    return null;
  }

}
