import { Component, OnInit } from '@angular/core';
import { DataValue } from 'src/app/models/data/data.model';
import { NetworkService } from 'src/app/_services/network.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dashboard2',
  templateUrl: './dashboard2.component.html',
  styleUrls: ['./dashboard2.component.css']
})
export class Dashboard2Component implements OnInit {
  DIESEL_FillVol: DataValue[];
  DIESEL_FillVol_Val: string;
  GASOHOL95_FillVol: DataValue[];
  GASOHOL95_FillVol_Val: string;
  DIESEL_Cycle: DataValue[];
  DIESEL_Cycle_Val: string;
  GASOHOL95_Cycle: DataValue[];
  GASOHOL95_Cycle_Val: string;
  Truck_In: DataValue[];
  Truck_In_Val: string;
  Truck_Out: DataValue[];
  Truck_Out_Val: string;
  DIESEL_WIP: DataValue[];
  DIESEL_WIP_Val: string;
  GASOHOL95_WIP: DataValue[];
  GASOHOL95_WIP_Val: string;
  constructor( private networkService: NetworkService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.feeddata();
  }

  onKey(date: string) {
    if (date == '2018-03'){
      this.toastr.success( "Updated dashboard", "success!");
    } 
    else{
      this.toastr.error( "No data", "error!");
    }

  }


  feeddata(){
    this.networkService.getmoDIESEL_FillVol().subscribe(
      output =>
      {
        this.DIESEL_FillVol = output.result;
        this.DIESEL_FillVol_Val = String((this.DIESEL_FillVol[0].value / 1000000).toFixed(2));
      }
    );
    this.networkService.getmoGASOHOL95_FillVol().subscribe(
      output =>
      {
        this.GASOHOL95_FillVol = output.result;
        this.GASOHOL95_FillVol_Val = String((this.GASOHOL95_FillVol[0].value / 1000000).toFixed(2));
      }
    );
    this.networkService.getmoDIESEL_Cycle().subscribe(
      output =>
      {
        this.DIESEL_Cycle = output.result;
        this.DIESEL_Cycle_Val = String(this.DIESEL_Cycle[0].value.toFixed(2));
      }
    );
    this.networkService.getmoGASOHOL95_Cycle().subscribe(
      output =>
      {
        this.GASOHOL95_Cycle = output.result;
        this.GASOHOL95_Cycle_Val = String(this.GASOHOL95_Cycle[0].value.toFixed(2));
      }
    );
    this.networkService.getmoTRUCK_IN().subscribe(
      output =>
      {
        this.Truck_In = output.result;
        this.Truck_In_Val = String(this.Truck_In[0].value.toFixed(2));
      }
    );
    this.networkService.getmoTRUCK_OUT().subscribe(
      output =>
      {
        this.Truck_Out = output.result;
        this.Truck_Out_Val = String(this.Truck_Out[0].value.toFixed(2));
      }
    );
    this.networkService.getmoGASOHOL95_wip().subscribe(
      output =>
      {
        this.GASOHOL95_WIP = output.result;
        this.GASOHOL95_WIP_Val = String(this.GASOHOL95_WIP[0].value.toFixed(2));
      }
    );
    this.networkService.getmoDIESEL_wip().subscribe(
      output =>
      {
        this.DIESEL_WIP = output.result;
        this.DIESEL_WIP_Val = String(this.DIESEL_WIP[0].value.toFixed(2));
      }
    );


  }

}
