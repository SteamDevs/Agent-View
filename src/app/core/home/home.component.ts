import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { User } from '../models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private dataStorage = sessionStorage.getItem('user')
  private user =   JSON.parse( this.dataStorage )
   

  constructor(private authService : AuthService, 
    private router : Router ) { }
  

  ngOnInit() {
    let x = JSON.parse( this.dataStorage ) 
    console.log(x.username )
  }

  logout(){
    this.authService.logOut()
    this.router.navigate(['/auth'])
  }


}
