import { Component, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  @ViewChild('pieChart') pieChart;


  pies: any;

  constructor() {}

  ionViewDidEnter(){
    this.createPieChart();
  }

  createPieChart(){
    this.pies = new Chart(this.pieChart.nativeElement, {
      type: 'pie',
      data: {
        labels: ['S1', 'S2', 'S3'],
        datasets: [{
          label: 'Viewers in millions',
          data: [0.7, 0.2, 0.1],
          backgroundColor: ['#a100ff', '#7500c0', '#460073'], // array should have same number of elements as number of dataset
          borderColor: ['#a100ff', '#7500c0', '#460073'],// array should have same number of elements as number of dataset
          borderWidth: 1
        }]
      },
    });
  }

}
