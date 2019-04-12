import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-control-processes',
  templateUrl: './control-processes.component.html',
  styleUrls: ['./control-processes.component.css']
})
export class ControlProcessesComponent implements OnInit {
  
  public radarChartLabels: any[] = ['Training', 'Attention Changes', 'Designing Template', 'Development', 'Unit/Int Testing', 'Integrated Solutions'];

  public radarChartData: any[] = [
    { data: [59, 90, 81, 56, 55, 40], label: 'Principal' },
    { data: [48, 40, 19, 96, 27, 100], label: 'Secondary' },
    { data: [20, 10, 19, 31, 8, 29], label: 'Not Urgent' }
  ];

  public radarChartType: any = 'radar';

  constructor() { }

  ngOnInit() {
  }

}
