import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from "chart.js";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  months: Array<string> = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  monthlyGrossIncomeDetail: Array<number> = [10, 50, 100, 10, 20, 30, 40, 100, 200, 400, 500, 900];

  constructor() {
    Chart.register(...registerables);
  }
  ngOnInit(): void {
    this.LoadLineChart();
  }


  LoadLineChart() {
    let elem: any = document.getElementById('lineChart');
    const ctx = elem.getContext('2d');
    const myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: this.months,
        datasets: [{
          label: '2022 income to company',
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',
          data: this.monthlyGrossIncomeDetail
      }]
      }
    })
  }
}
