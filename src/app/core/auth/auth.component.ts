import { Component, OnInit } from '@angular/core';
import { User } from '../models/user'

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  private user : User = new User(); 
 
  constructor() { }

  ngOnInit() {
  }

  authLogin() : void {
   console.log(this.user) 
  }

}
