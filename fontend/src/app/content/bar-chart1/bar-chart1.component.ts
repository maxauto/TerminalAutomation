import { Component, OnInit, Input, OnChanges } from '@angular/core';
import {ChartDataSets, ChartOptions, ChartType} from 'chart.js';
import { Label } from 'ng2-charts';
import { NetworkService } from 'src/app/_services/network.service';
import { DataValue } from 'src/app/models/data/data.model';

@Component({
  selector: 'app-bar-chart1',
  templateUrl: './bar-chart1.component.html',
  styleUrls: ['./bar-chart1.component.css']
})
export class BarChart1Component implements OnChanges, OnInit {
  @Input() datefromdash: string;
  SO_numq: DataValue[];
  IW_numq: DataValue[];
  DIESEL_numq: DataValue[];
  GASOHOL95_numq: DataValue[];
  OW_numq: DataValue[];
  Value_SO_numq: number;
  Value_IW_numq: number;
  Value_DIESEL_numq: number;
  Value_GASOHOL95_numq: number;
  Value_OW_numq: number;


  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] = ['Sale Office','Inbound WB','DIESEL Bay','GASOHOL Bay','Outbound WB'];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];
  barChartColor = [{
    backgroundColor: 'rgba(103, 200, 180, .5)',
  }];
  barChartData: ChartDataSets[];

  constructor(private networkService: NetworkService) { }
  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    this.dailySO_numq();
  }

  ngOnInit(): void {
    this.feeddata();
    this.dailySO_numq();
  }
  dailySO_numq(){
    this.networkService.getSO_Numq(this.datefromdash).subscribe(
      output =>{
        this.SO_numq =  output.result;
        this.Value_SO_numq = this.SO_numq[0].value;
        this.dailyIW_numq();
        
      }
    );
  }
  dailyIW_numq(){
    this.networkService.getIW_Numq(this.datefromdash).subscribe(
      output =>{
        this.IW_numq =  output.result;
        this.Value_IW_numq = this.IW_numq[0].value;
        this.dailyDIESEL_numq();
        
      }
    );
  }
  dailyDIESEL_numq(){
    this.networkService.getDIESEL_Numq(this.datefromdash).subscribe(
      output =>{
        this.DIESEL_numq =  output.result;
        this.Value_DIESEL_numq = this.DIESEL_numq[0].value;
        this.dailyGASOHOL95_numq();
      }
    );
  }
  dailyGASOHOL95_numq(){
    this.networkService.getGASOHOL95_Numq(this.datefromdash).subscribe(
      output =>{
        this.GASOHOL95_numq =  output.result;
        this.Value_GASOHOL95_numq = this.GASOHOL95_numq[0].value;
        this.dailyOW_numq();
      }
    );
  }
  dailyOW_numq(){
    this.networkService.getOW_Numq(this.datefromdash).subscribe(
      output =>{
        this.OW_numq =  output.result;
        this.Value_OW_numq = this.OW_numq[0].value;
        this.feeddata();
      }
    );
  }
  
  feeddata(){
    this.barChartData = [{data:[this.Value_SO_numq,this.Value_IW_numq,this.Value_DIESEL_numq,this.Value_GASOHOL95_numq,this.Value_OW_numq], label:"Number of queue"}];
  }


}
