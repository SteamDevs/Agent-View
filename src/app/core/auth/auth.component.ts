import { Component, OnInit } from '@angular/core';
import { User } from '../models/user'
import { Router } from '@angular/router'
import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  private user : User = new User(); 
 
  constructor(private authService : AuthService,
    private router: Router ) {}

  ngOnInit() {
  }

  authLogin() : void {
    if(this.user.username == null || this.user.password == null ){
      console.log('el pass / usuario vacio')
      return
    }

    this.authService.login(this.user)
      .subscribe( response =>{
        console.log(response)
        this.router.navigate(['/home'])
      })
    console.log(this.user) 
  }

}
