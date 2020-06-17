import { Component, OnInit, Input, OnChanges } from '@angular/core';
import {ChartDataSets, ChartOptions, ChartType} from 'chart.js';
import { Label } from 'ng2-charts';
import { NetworkService } from 'src/app/_services/network.service';
import { DataValue } from 'src/app/models/data/data.model';


@Component({
  selector: 'app-bar-chart3',
  templateUrl: './bar-chart3.component.html',
  styleUrls: ['./bar-chart3.component.css']
})
export class BarChart3Component implements OnInit {
  SO_waitT: DataValue[];
  IW_waitT: DataValue[];
  DIESEL_waitT: DataValue[];
  GASOHOL95_waitT: DataValue[];
  OW_waitT: DataValue[];
  Value_SO_waitT: number;
  Value_IW_waitT: number;
  Value_DIESEL_waitT: number;
  Value_GASOHOL95_waitT: number;
  Value_OW_waitT: number;


  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] = ['Sale Office','Inbound WB','DIESEL Bay','GASOHOL Bay','Outbound WB'];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];
  barChartColor = [{
    backgroundColor: 'rgba(103, 58, 183, .5)',
  }];
  barChartData: ChartDataSets[];
  constructor(private networkService: NetworkService) { }

  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    this.dailySO_waitT();
    
  }

  ngOnInit(): void {
    this.dailySO_waitT();
    this.feeddata();
  }

  dailySO_waitT(){
    this.networkService.getmoSO_waitT().subscribe(
      output =>{
        this.SO_waitT =  output.result;
        this.Value_SO_waitT = this.SO_waitT[0].value;
        this.dailyIW_waitT();
      }
    );
  }
  dailyIW_waitT(){
    this.networkService.getmoIW_waitT().subscribe(
      output =>{
        this.IW_waitT =  output.result;
        this.Value_IW_waitT = this.IW_waitT[0].value;
        this.dailyDIESEL_waitT();
      }
    );
  }
  dailyDIESEL_waitT(){
    this.networkService.getmoDIESEL_waitT().subscribe(
      output =>{
        this.DIESEL_waitT =  output.result;
        this.Value_DIESEL_waitT = this.DIESEL_waitT[0].value;
        this.dailyGASOHOL95_waitT();
      }
    );
  }
  dailyGASOHOL95_waitT(){
    this.networkService.getmoGASOHOL95_waitT().subscribe(
      output =>{
        this.GASOHOL95_waitT =  output.result;
        this.Value_GASOHOL95_waitT = this.GASOHOL95_waitT[0].value;
        this.dailyOW_waitT();
      }
    );
  }
  dailyOW_waitT(){
    this.networkService.getmoOW_waitT().subscribe(
      output =>{
        this.OW_waitT =  output.result;
        this.Value_OW_waitT = this.OW_waitT[0].value;
        this.feeddata();
      }
    );
  }
  
  feeddata(){
    this.barChartData = [{data:[this.Value_SO_waitT,this.Value_IW_waitT,this.Value_DIESEL_waitT,this.Value_GASOHOL95_waitT,this.Value_OW_waitT], label:"Waiting Time"}];
  }
}
