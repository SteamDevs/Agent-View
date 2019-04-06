import { Component, OnInit } from '@angular/core';
import { User} from '../models/user'
import { UsersService } from '../../services/users.service'
import { Router } from '@angular/router'
import swal from 'sweetalert2'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  private user : User = new User(); 
  public users : User[] = [] 

  //private userRol : User.roles = new User(); 

  constructor(private userService : UsersService,
    private router : Router ) { }

  ngOnInit() {
  
  }

  RegisterNewUser(): void{
    //console.log(this.user)
    this.userService.addUser(this.user)
      .subscribe( result => {
        this.router.navigate(['/auth'])
        swal.fire(
          ` Account Created 😎 `, `User : ${result.username} `, `success`
          )
      })
  }

}
