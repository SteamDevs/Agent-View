import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-control-users',
  templateUrl: './control-users.component.html',
  styleUrls: ['./control-users.component.css']
})
export class ControlUsersComponent implements OnInit {

  public lineChartData: Array<any> = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' }
  ];

  public lineChartLabels: Array<any> = ['Enero', 'Febrero', 'Marzo', 'Abril' ];

  constructor() { }

  ngOnInit() {
  }

}
