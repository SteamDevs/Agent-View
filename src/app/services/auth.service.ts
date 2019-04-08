import { Injectable } from '@angular/core';
import {  Observable} from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { User } from '../core/models/user'
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public httpHeaders = new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded',
    'Authorization': 'Basic ' + environment.APP_CREDENTIALS
  })

  
  constructor(private http: HttpClient ) { }


  login(user : User ): Observable<any>{  

    let params = `grant_type=${ environment.APP_CONSSECION }&username=${ user.username }&password=${ user.password }`
 
    return this.http.post<any>(environment.API_URL_OAUTH, params , { headers: this.httpHeaders })
  }

}
