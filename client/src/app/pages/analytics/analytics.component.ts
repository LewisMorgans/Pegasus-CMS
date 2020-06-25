import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss']
})
export class AnalyticsComponent implements OnInit {


  chart1 = {
    data: {
      labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      datasets: [{
        label: 'Premium',
        data: [50, 80, 60, 120, 80, 100, 60],
        backgroundColor: 'transparent',
        borderColor: '#35495E',
        borderWidth: 2
      }
      ]
    }
  };
  chart2 = {
    data: {
      labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      datasets: [{
        label: 'Premium',
        data: [113, 119, 196, 37, 76, 59, 34, 30, 174, 104, 163,	155],
        backgroundColor: '#35495E',
        borderColor: '#35495E',
        borderWidth: 2
      }
      ]
    },
    options: {
      barValueSpacing: 1,
      scales: {
        yAxes: [{
          ticks: {
            fontColor: 'rgba(0,0,0,.6)',
            fontStyle: 'bold',
            beginAtZero: true,
            maxTicksLimit: 8,
            padding: 10
          }
        }],
        xAxes: [{
          barPercentage: 0.4
        }]
      },
      responsive: true,
      legend: {
        position: 'bottom',
        display: false
      },
    }
  };
  chart3 = {
    data: {
      datasets: [{
        data: [6, 12, 10],
        backgroundColor: ["#5b6582", "#98a4c7", "#36a2eb"],
      }],
      labels: [
        'html',
        'css',
        'javascript'
      ]

    },
    options: {
      legend: {
        position: 'bottom',
        display: false
      },
      cutoutPercentage: 80
    }
  };

  constructor() { }

  ngOnInit() {

    new Chart('chart-line', {
      type: 'line',
      data: this.chart1.data,
      // options: this.chart1.options
    });
    new Chart('chart-bar', {
      type: 'bar',
      data: this.chart2.data,
      options: this.chart2.options
    });
    new Chart('chart-doughnut', {
      type: 'doughnut',
      data: this.chart3.data,
      options: this.chart3.options
    });

  }


}
