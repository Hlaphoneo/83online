import { Component, OnInit } from '@angular/core';
import { RestService } from '../services/rest.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  chartOptions = {
  responsive: true
};

currencylables;
activeCurrency;
label;
POOL = Array();

chartData = [
  { data: [0, 0, 0, 0, 0,0 ,0 ,0 ,0,0,0], label: 'No data' }
];

chartLabels = ['2008', , '2010', , '2012', , '2014', , '2016', ,'2018'];
currency: any;
onChartClick(event) {
}

  constructor(public rest : RestService) {
    this.loadData();
    this.test({"value":"ZAR"})
    this.currency = "ZAR"
  }

  test(event){
    let pointer = 0;
    for (let i = 8 ; i < 19; i++) {
      if(i < 10){
        if(pointer == 0)
          this.label = event.value
        this.POOL[pointer] = this.rest.data['200'+i+'-01-01'][event.value]
      }
      else
        this.POOL[pointer]= this.rest.data['20'+i+'-01-01'][event.value]
      pointer++;
    }
    this.chartData = [
      { data: this.POOL, label: 'No data' }
    ];
  }

  loadData(){
    this.currencylables= [
      {value: 'ZAR', viewValue: "ZAR"},
      {value: 'USD', viewValue: "USD"},
      {value: 'AUD', viewValue: "AUD"},
      {value: 'CNY', viewValue: "CNY"},
      {value: 'CZK', viewValue: "CZK"},
      {value: 'RUB', viewValue: "RUB"}
    ];
  }
}
