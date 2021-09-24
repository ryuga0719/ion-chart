import { Component, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  @ViewChild('lineChart') lineChart;

  lines: any;

  constructor() { }

  ionViewDidEnter() {
    this.createLineChart();
  }

  createLineChart() {
    this.lines = new Chart(this.lineChart.nativeElement, {
      type: 'line',
      data: {
        labels: ['S1', 'S2', 'S3', 'S4', 'S5'],
        datasets: [{
          label: 'Viewers in millions',
          data: [23, 27, 26, 20, 24],
          borderColor: '#a100ff',// array should have same number of elements as number of dataset
          borderWidth: 1,
        }]
      }
    })
  }
}
