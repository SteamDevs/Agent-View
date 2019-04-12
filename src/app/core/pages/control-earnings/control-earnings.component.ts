import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-control-earnings',
  templateUrl: './control-earnings.component.html',
  styleUrls: ['./control-earnings.component.css']
})
export class ControlEarningsComponent implements OnInit {

  public barChartLabels: any[] = ['profit per users', 'changes in current currency', 'Secondary gains', 'others'];
  public barChartType: any = 'bar';

  public baseTime : number = 12
  public x : number = 5
  public q : number = 6
  public f : number = 3
 
  public barChartData: any[] = [
    { data: [0, 0, 0, 0], label: 'Series A' },
    { data: [0, 0, 0, 0], label: 'Series B' }
  ];

  constructor() { }

  ngOnInit() {

    setInterval( ()=> {

      let dataIncrement = [

        this.baseTime++,
        Math.round(  Math.random() + 10 ),
        Math.round(  Math.random() + 11  ),
        Math.round(  Math.random() + 20 )
      
      ]

      this.barChartData = [
        { data: dataIncrement  ,label: 'Series A' },
        { data: dataIncrement , label: 'Series B' }
      ]

    }, 4000 )
  }



}
