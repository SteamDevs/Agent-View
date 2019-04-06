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
    if(this.user.username == null || this.user.password == null ){
      console.log('el pass / usuario vacio')
      return
    }
   console.log(this.user) 
  }

}
