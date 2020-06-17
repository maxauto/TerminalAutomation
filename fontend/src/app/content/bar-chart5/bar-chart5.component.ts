import { Component, OnInit, Input, OnChanges } from '@angular/core';
import {ChartDataSets, ChartOptions, ChartType} from 'chart.js';
import { Label } from 'ng2-charts';
import { NetworkService } from 'src/app/_services/network.service';
import { DataValue } from 'src/app/models/data/data.model';

@Component({
  selector: 'app-bar-chart5',
  templateUrl: './bar-chart5.component.html',
  styleUrls: ['./bar-chart5.component.css']
})
export class BarChart5Component implements OnInit {

  SO_SCH: DataValue[];
  IW_SCH: DataValue[];
  DIESEL_SCH: DataValue[];
  GASOHOL95_SCH: DataValue[];
  OW_SCH: DataValue[];
  Value_SO_sch: number;
  Value_IW_sch: number;
  Value_DIESEL_sch: number;
  Value_GASOHOL95_sch: number;
  Value_OW_sch: number;


  barChartOptions: ChartOptions = {
    responsive: true,
    
  };
  barChartLabels: Label[] = ['Sale Office','Inbound WB','DIESEL Bay','GASOHOL Bay','Outbound WB'];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];
  barChartColor = [{
    backgroundColor: 'rgba(200, 200, 100, .5)',
  }];
  barChartData: ChartDataSets[];

  constructor(private networkService: NetworkService) { }
  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    this.dailySO_sch();
  }

  ngOnInit(): void {
    this.feeddata();
    this.dailySO_sch();
  }
  dailySO_sch(){
    this.networkService.getmoSO_Sch().subscribe(
      output =>{
        this.SO_SCH =  output.result;
        this.Value_SO_sch = this.SO_SCH[0].value;
        this.dailyIW_sch();
        
      }
    );
  }
  dailyIW_sch(){
    this.networkService.getmoIW_Sch().subscribe(
      output =>{
        this.IW_SCH =  output.result;
        this.Value_IW_sch = this.IW_SCH[0].value;
        this.dailyDIESEL_sch();
        
      }
    );
  }
  dailyDIESEL_sch(){
    this.networkService.getmoDIESEL_Sch().subscribe(
      output =>{
        this.DIESEL_SCH =  output.result;
        this.Value_DIESEL_sch = this.DIESEL_SCH[0].value;
        this.dailyGASOHOL95_sch();
      }
    );
  }
  dailyGASOHOL95_sch(){
    this.networkService.getmoGASOHOL95_Sch().subscribe(
      output =>{
        this.GASOHOL95_SCH =  output.result;
        this.Value_GASOHOL95_sch = this.GASOHOL95_SCH[0].value;
        this.dailyOW_sch();
      }
    );
  }
  dailyOW_sch(){
    this.networkService.getmoOW_Sch().subscribe(
      output =>{
        this.OW_SCH =  output.result;
        this.Value_OW_sch = this.OW_SCH[0].value;
        this.feeddata();
      }
    );
  }
  
  feeddata(){
    this.barChartData = [{data:[ this.Value_SO_sch, this.Value_IW_sch, this.Value_DIESEL_sch, this.Value_GASOHOL95_sch, this.Value_OW_sch], label:"Schedule Utilization"}];
  }

}
