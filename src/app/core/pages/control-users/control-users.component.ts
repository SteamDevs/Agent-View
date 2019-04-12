import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-control-users',
  templateUrl: './control-users.component.html',
  styleUrls: ['./control-users.component.css']
})
export class ControlUsersComponent implements OnInit {

  public radarChartLabels: any[] = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];

  public radarChartData: any[] = [
    { data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B' }
  ];
  public radarChartType: any = 'radar';


  constructor() { }

  ngOnInit() {
  }

}
