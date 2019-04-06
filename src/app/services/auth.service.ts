import { Injectable } from '@angular/core';
import {  Observable} from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { User } from '../core/models/user'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public API_URL_OAUTH: string = 'http://localhost:8080/oauth/token'
  public credentials  = btoa('Agent-Api' + ':' + '123abc')
  private httpHeaders = new HttpHeaders({
    'Content-Type' : 'application/x-www-form-urlencoded',
    'Authorization' : 'Basic' + this.credentials 
  })

  
  constructor(private http: HttpClient ) { }


  login(user : User ): Observable<any>{
    
    let params = new URLSearchParams()
    params.set('grant_type','password')
    params.set('username', user.username)
    params.set('password', user.password)
 
    return this.http.post<any>( this.API_URL_OAUTH, params, { headers: this.httpHeaders })

  }

}
