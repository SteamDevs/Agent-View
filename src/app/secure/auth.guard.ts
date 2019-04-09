import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router'



@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(public authService: AuthService, 
      public router : Router  ){}

  canActivate(){
    if( this.authService.isAuthenticated() ){
      return true
      this.router.navigate(['/home'])
    }else{
      return false;
      this.router.navigate(['/auth'])
    }
  }
  
}
