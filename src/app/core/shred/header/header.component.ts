import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private dataStorage = sessionStorage.getItem('user')
  private user =   JSON.parse( this.dataStorage )

  constructor(private authService : AuthService, 
    private router : Router ) { }

  ngOnInit() {
    let x = JSON.parse( this.dataStorage ) 
    console.log(x.username ) //probar sino desechar la idea
  }

  logout(){
    this.authService.logOut()
    this.router.navigate(['/auth'])
  }

}
