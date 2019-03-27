import { Component, OnInit, Input } from '@angular/core';
import { Label, MultiDataSet } from 'ng2-charts';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: []
})
export class GraficoDonaComponent implements OnInit {
  @Input() chartLabels: Label[] = [];
  @Input() chartData: MultiDataSet = [];
  @Input() chartType: ChartType = 'doughnut';
  
  // @Input() doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  // @Input() doughnutChartData: MultiDataSet = [ [350, 450, 100], [50, 150, 120], [250, 130, 70], ];
  // @Input() doughnutChartType: ChartType = 'doughnut';

  // public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  // public doughnutChartData: MultiDataSet = [
  //   [350, 450, 100]];
  // public doughnutChartType: ChartType = 'doughnut';


  constructor() { }

  ngOnInit() {
    // console.log('doughnutChartLabels', this.doughnutChartLabels);
    // console.log('this.chartLabels', this.chartLabels);

    // console.log('doughnutChartData', this.doughnutChartData);
    // console.log('this.chartData', this.chartData);

    // console.log('doughnutChartType', this.doughnutChartType);
    // console.log('this.chartType', this.chartType);
  }

}
