import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { User } from '../core/models/user'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private httpHeaders = new HttpHeaders({'Content-Type' : 'application/json'})

  constructor(private http: HttpClient) { }

  addUser(user: User ) : Observable<User> {
    let data = JSON.stringify(user)
    let URL_API = 'http://localhost:8080/api/v1/users'
    console.log(data);
    return this.http.post<User>("http://localhost:8080/api/v1/users", data, { headers: this.httpHeaders })
  }


}
