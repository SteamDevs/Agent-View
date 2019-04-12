import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-control-metrics',
  templateUrl: './control-metrics.component.html',
  styleUrls: ['./control-metrics.component.css']
})
export class ControlMetricsComponent implements OnInit {

  public lineChartData: Array<any> = [
    { data: [0, 0, 0, 0 ], label: 'Monitoring' },
    { data: [0, 0, 0, 0 ], label: 'Monitoring' }
  ];

  public lineChartLabels: Array<any> = ['Performance', 'latency', 'integrity', 'Trafic' ];

  constructor() { }

  ngOnInit() {
  
    setInterval( ()=>{

      let MetricData =  [

        Math.round(  Math.random() + 40 ),
        Math.round(  Math.random() + 10 ),
        Math.round(  Math.random() + 80 ),
        Math.round(  Math.random() + 10 )
      ]

      let InnerMetrics = [

        Math.round(  Math.random()  ),
        Math.round(  Math.random() + 10 ),
        Math.round(  Math.random() + 70  ),
        Math.round(  Math.random() + 20 )
      
      ]

      this.lineChartData  = [
        {data : InnerMetrics, label: 'Main process' },
        {data : MetricData, label: 'Child Processes' }
      ]

    }, 1000)
  
  }

}
