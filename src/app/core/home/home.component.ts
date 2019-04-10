import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private dataStorage = sessionStorage.getItem('user')
  private user =   JSON.parse( this.dataStorage )
   

  constructor( ) { }
  

  ngOnInit() {
    let x = JSON.parse( this.dataStorage ) 
    console.log(x.username ) //probar sino desechar la idea
  }
}
