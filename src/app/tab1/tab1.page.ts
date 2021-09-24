import { Component, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  @ViewChild('barChart') barChart;


  bars: any;


  constructor() {
  }

  ionViewDidEnter() {
    this.createBarChart();
  }


  createBarChart() {
    this.bars = new Chart(this.barChart.nativeElement, {
      type: 'bar',
      data: {
        labels: ['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8'],
        datasets: [{
          label: 'Viewers in millions',
          data: [2.5, 3.8, 5, 6.9, 6.9, 7.5, 10, 17],
          backgroundColor: 'rgb(161, 0, 255)', // array should have same number of elements as number of dataset
          borderColor: 'rgb(161, 0, 255)',// array should have same number of elements as number of dataset
          borderWidth: 1
        }]
      },
    });
  }

}
