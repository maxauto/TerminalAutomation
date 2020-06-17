import { Component, OnInit } from '@angular/core';
import { NetworkService } from 'src/app/_services/network.service';
import { ToastrService } from 'ngx-toastr';
import { DataValue, DataStation, DataBay, DataEG } from 'src/app/models/data/data.model';

@Component({
  selector: 'app-tucktracking',
  templateUrl: './tucktracking.component.html',
  styleUrls: ['./tucktracking.component.css']
})
export class TucktrackingComponent implements OnInit {

  SearchBy: string;
  Datetype: boolean;
  SO: DataStation[];
  IW: DataStation[];
  Bay: DataBay[];
  OW: DataStation[];
  EG: DataEG[];

  constructor(private networkService: NetworkService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.SearchBy = "Truck ID";
  }

  selectsearch(event: any){
    this.SearchBy = event.target.value;
    if(this.SearchBy == "Date In" || this.SearchBy == "Date Out"){
      this.Datetype = true;
    }
    else{
      this.Datetype = false;
    }
  }
 
  Searchdata(data: string){
    this.SO = [];
    this.Bay = [];
    this.IW = [];
    this.OW = [];
    this.EG = [];
    if(this.SearchBy == "Truck ID"){
      this.networkService.getSOTruckByID(data).subscribe(
        output =>
        {
          this.SO = output.result;
          this.SO.forEach((item)=>{
            this.networkService.getIWTruckByPO(item.poNo).subscribe(
              output =>
              {
                this.IW.push(output.result[0]);
              }
            );
            this.networkService.getOWTruckByPO(item.poNo).subscribe(
              output =>
              {
                this.OW.push(output.result[0]);
               
              }
            );
            this.networkService.getBayTruckByPO(item.poNo).subscribe(
              output =>
              {
                this.Bay.push(output.result[0]);
             
              }
            );
            this.networkService.getEGTruckByPO(item.poNo).subscribe(
              output =>
              {
                this.EG.push(output.result[0]);
            
              }
            );
        });
        }
      );
      
    }
    else if(this.SearchBy == "PO Number"){
      this.networkService.getSOTruckByPO(data).subscribe(
        output =>
        {
          this.SO = output.result;

        }
      );
      this.networkService.getIWTruckByPO(data).subscribe(
        output =>
        {
          this.IW = output.result;
         
        }
      );
      this.networkService.getOWTruckByPO(data).subscribe(
        output =>
        {
          this.OW = output.result;
         
        }
      );
      this.networkService.getBayTruckByPO(data).subscribe(
        output =>
        {
          this.Bay = output.result;
       
        }
      );
      this.networkService.getEGTruckByPO(data).subscribe(
        output =>
        {
          this.EG = output.result;
      
        }
      );
    }
    else if(this.SearchBy == "Date In"){
      
      this.networkService.getSOTruckByDi(data).subscribe(
        output =>
        {
         
          this.SO = output.result;
          this.SO.forEach((item)=>{
            this.networkService.getIWTruckByPO(item.poNo).subscribe(
              output =>
              {
                this.IW.push(output.result[0]);
              }
            );
            this.networkService.getOWTruckByPO(item.poNo).subscribe(
              output =>
              {
                this.OW.push(output.result[0]);
               
              }
            );
            this.networkService.getBayTruckByPO(item.poNo).subscribe(
              output =>
              {
                this.Bay.push(output.result[0]);
             
              }
            );
            this.networkService.getEGTruckByPO(item.poNo).subscribe(
              output =>
              {
                this.EG.push(output.result[0]);
            
              }
            );
        });
        }
      );
    }
    else if(this.SearchBy == "Date Out"){
      this.networkService.getEGTruckByDo(data).subscribe(
        output =>
        {
          this.EG = output.result;
          this.EG.forEach((item)=>{

            this.networkService.getSOTruckByPO(item.poNo).subscribe(
              output =>
              {
                this.SO.push(output.result[0]);
              }
            );
            this.networkService.getIWTruckByPO(item.poNo).subscribe(
              output =>
              {
                this.IW.push(output.result[0]);
              }
            );
            this.networkService.getOWTruckByPO(item.poNo).subscribe(
              output =>
              {
                this.OW.push(output.result[0]);
               
              }
            );
            this.networkService.getBayTruckByPO(item.poNo).subscribe(
              output =>
              {
                this.Bay.push(output.result[0]);
             
              }
            );
        });
        }
      );
    }
  }
}
