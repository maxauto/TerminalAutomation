import { Component, OnInit } from '@angular/core';
import { DataValue } from 'src/app/models/data/data.model';
import { NetworkService } from 'src/app/_services/network.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-dashboard1',
  templateUrl: './dashboard1.component.html',
  styleUrls: ['./dashboard1.component.css']
})
export class Dashboard1Component implements OnInit {
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
  Date: string;
  constructor( private networkService: NetworkService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.Date = "2018-03-01";
    this.feeddata();
  }

  onKey(date: string) {
    this.toastr.success( "Updated dashboard", "success!");
    this.Date =  date;
    this.feeddata();
  }


  feeddata(){
    this.networkService.getDIESEL_FillVol(this.Date).subscribe(
      output =>
      {
        this.DIESEL_FillVol = output.result;
        this.DIESEL_FillVol_Val = String(this.DIESEL_FillVol[0].value.toFixed(2));
      }
    );
    this.networkService.getGASOHOL95_FillVol(this.Date).subscribe(
      output =>
      {
        this.GASOHOL95_FillVol = output.result;
        this.GASOHOL95_FillVol_Val = String(this.GASOHOL95_FillVol[0].value.toFixed(2));
      }
    );
    this.networkService.getDIESEL_Cycle(this.Date).subscribe(
      output =>
      {
        this.DIESEL_Cycle = output.result;
        this.DIESEL_Cycle_Val = String(this.DIESEL_Cycle[0].value.toFixed(2));
      }
    );
    this.networkService.getGASOHOL95_Cycle(this.Date).subscribe(
      output =>
      {
        this.GASOHOL95_Cycle = output.result;
        this.GASOHOL95_Cycle_Val = String(this.GASOHOL95_Cycle[0].value.toFixed(2));
      }
    );
    this.networkService.getTRUCK_IN(this.Date).subscribe(
      output =>
      {
        this.Truck_In = output.result;
        this.Truck_In_Val = String(this.Truck_In[0].value.toFixed(2));
      }
    );
    this.networkService.getTRUCK_OUT(this.Date).subscribe(
      output =>
      {
        this.Truck_Out = output.result;
        this.Truck_Out_Val = String(this.Truck_Out[0].value.toFixed(2));
      }
    );
    this.networkService.getGASOHOL95_wip(this.Date).subscribe(
      output =>
      {
        this.GASOHOL95_WIP = output.result;
        this.GASOHOL95_WIP_Val = String(this.GASOHOL95_WIP[0].value.toFixed(2));
      }
    );
    this.networkService.getDIESEL_wip(this.Date).subscribe(
      output =>
      {
        this.DIESEL_WIP = output.result;
        this.DIESEL_WIP_Val = String(this.DIESEL_WIP[0].value.toFixed(2));
      }
    );


  }

}
